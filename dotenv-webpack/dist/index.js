"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenvDefaults = _interopRequireDefault(require("dotenv-defaults"));

var _fs = _interopRequireDefault(require("fs"));

var _webpack = require("webpack");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Mostly taken from here: https://github.com/motdotla/dotenv-expand/blob/master/lib/main.js#L4
var interpolate = function interpolate(env, vars) {
  var matches = env.match(/\$([a-zA-Z0-9_]+)|\${([a-zA-Z0-9_]+)}/g) || [];
  matches.forEach(function (match) {
    var key = match.replace(/\$|{|}/g, '');
    var variable = vars[key] || '';
    variable = interpolate(variable, vars);
    env = env.replace(match, variable);
  });
  return env;
};

var isMainThreadElectron = function isMainThreadElectron(target) {
  return target.startsWith('electron') && target.endsWith('main');
};

var Dotenv = /*#__PURE__*/function () {
  /**
   * The dotenv-webpack plugin.
   * @param {Object} options - The parameters.
   * @param {String} [options.path=./.env] - The location of the environment variable.
   * @param {Boolean|String} [options.safe=false] - If false ignore safe-mode, if true load `'./.env.example'`, if a string load that file as the sample.
   * @param {Boolean} [options.systemvars=false] - If true, load system environment variables.
   * @param {Boolean} [options.silent=false] - If true, suppress warnings, if false, display warnings.
   * @param {String} [options.prefix=process.env.] - The prefix, used to denote environment variables.
   * @returns {webpack.DefinePlugin}
   */
  function Dotenv() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Dotenv);

    this.config = Object.assign({}, {
      path: './.env',
      prefix: 'process.env.'
    }, config);
  }

  _createClass(Dotenv, [{
    key: "apply",
    value: function apply(compiler) {
      var _compiler$options$tar;

      var variables = this.gatherVariables();
      var target = (_compiler$options$tar = compiler.options.target) !== null && _compiler$options$tar !== void 0 ? _compiler$options$tar : 'web';
      var version = compiler.webpack && compiler.webpack.version || '4';
      var data = this.formatData({
        variables: variables,
        target: target,
        version: version
      });
      new _webpack.DefinePlugin(data).apply(compiler);
    }
  }, {
    key: "gatherVariables",
    value: function gatherVariables() {
      var _this$config = this.config,
          safe = _this$config.safe,
          allowEmptyValues = _this$config.allowEmptyValues;
      var vars = this.initializeVars();

      var _this$getEnvs = this.getEnvs(),
          env = _this$getEnvs.env,
          blueprint = _this$getEnvs.blueprint;

      Object.keys(blueprint).forEach(function (key) {
        var value = Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : env[key];
        var isMissing = typeof value === 'undefined' || value === null || !allowEmptyValues && value === '';

        if (safe && isMissing) {
          throw new Error("Missing environment variable: ".concat(key));
        } else {
          vars[key] = value;
        }
      }); // add the leftovers

      if (safe) {
        Object.keys(env).forEach(function (key) {
          if (!Object.prototype.hasOwnProperty.call(vars, key)) {
            vars[key] = env[key];
          }
        });
      }

      return vars;
    }
  }, {
    key: "initializeVars",
    value: function initializeVars() {
      return this.config.systemvars ? Object.assign({}, process.env) : {};
    }
  }, {
    key: "getEnvs",
    value: function getEnvs() {
      var _this$config2 = this.config,
          path = _this$config2.path,
          silent = _this$config2.silent,
          safe = _this$config2.safe;

      var env = _dotenvDefaults["default"].parse(this.loadFile({
        file: path,
        silent: silent
      }), this.getDefaults());

      var blueprint = env;

      if (safe) {
        var file = './.env.example';

        if (safe !== true) {
          file = safe;
        }

        blueprint = _dotenvDefaults["default"].parse(this.loadFile({
          file: file,
          silent: silent
        }));
      }

      return {
        env: env,
        blueprint: blueprint
      };
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      var _this$config3 = this.config,
          silent = _this$config3.silent,
          defaults = _this$config3.defaults;

      if (defaults) {
        return this.loadFile({
          file: defaults === true ? './.env.defaults' : defaults,
          silent: silent
        });
      }

      return '';
    }
  }, {
    key: "formatData",
    value: function formatData(_ref) {
      var _ref$variables = _ref.variables,
          variables = _ref$variables === void 0 ? {} : _ref$variables,
          target = _ref.target,
          version = _ref.version;
      var _this$config4 = this.config,
          expand = _this$config4.expand,
          prefix = _this$config4.prefix;
      var formatted = Object.keys(variables).reduce(function (obj, key) {
        var v = variables[key];
        var vKey = "".concat(prefix).concat(key);
        var vValue;

        if (expand) {
          if (v.substring(0, 2) === '\\$') {
            vValue = v.substring(1);
          } else if (v.indexOf('\\$') > 0) {
            vValue = v.replace(/\\\$/g, '$');
          } else {
            vValue = interpolate(v, variables);
          }
        } else {
          vValue = v;
        }

        obj[vKey] = JSON.stringify(vValue);
        return obj;
      }, {}); // We have to stub any remaining `process.env`s due to Webpack 5 not polyfilling it anymore
      // https://github.com/mrsteele/dotenv-webpack/issues/240#issuecomment-710231534
      // However, if someone targets Node or Electron `process.env` still exists, and should therefore be kept
      // https://webpack.js.org/configuration/target

      if (this.shouldStub({
        target: target,
        version: version
      })) {
        // Results in `"MISSING_ENV_VAR".NAME` which is valid JS
        formatted['process.env'] = '"MISSING_ENV_VAR"';
      }

      return formatted;
    }
  }, {
    key: "shouldStub",
    value: function shouldStub(_ref2) {
      var _this = this;

      var targetInput = _ref2.target,
          version = _ref2.version;

      if (!version.startsWith('5')) {
        return false;
      }

      var targets = Array.isArray(targetInput) ? targetInput : [targetInput];
      return targets.every(function (target) {
        return (// If configured prefix is 'process.env'
          _this.config.prefix === 'process.env.' && // If we're not configured to never stub
          _this.config.ignoreStub !== true && ( // And
          // We are configured to always stub
          _this.config.ignoreStub === false || // Or if we should according to the target
          !target.includes('node') && !isMainThreadElectron(target))
        );
      });
    }
    /**
     * Load a file.
     * @param {String} config.file - The file to load.
     * @param {Boolean} config.silent - If true, suppress warnings, if false, display warnings.
     * @returns {Object}
     */

  }, {
    key: "loadFile",
    value: function loadFile(_ref3) {
      var file = _ref3.file,
          silent = _ref3.silent;

      try {
        return _fs["default"].readFileSync(file, 'utf8');
      } catch (err) {
        this.warn("Failed to load ".concat(file, "."), silent);
        return {};
      }
    }
    /**
     * Displays a console message if 'silent' is falsey
     * @param {String} msg - The message.
     * @param {Boolean} silent - If true, display the message, if false, suppress the message.
     */

  }, {
    key: "warn",
    value: function warn(msg, silent) {
      !silent && console.warn(msg);
    }
  }]);

  return Dotenv;
}();

var _default = Dotenv;
exports["default"] = _default;