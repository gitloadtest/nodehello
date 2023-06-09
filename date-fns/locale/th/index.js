"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("./_lib/formatDistance/index.js"));
var _index2 = _interopRequireDefault(require("./_lib/formatLong/index.js"));
var _index3 = _interopRequireDefault(require("./_lib/formatRelative/index.js"));
var _index4 = _interopRequireDefault(require("./_lib/localize/index.js"));
var _index5 = _interopRequireDefault(require("./_lib/match/index.js"));
/**
 * @type {Locale}
 * @category Locales
 * @summary Thai locale.
 * @language Thai
 * @iso-639-2 tha
 * @author Athiwat Hirunworawongkun [@athivvat]{@link https://github.com/athivvat}
 * @author [@hawkup]{@link https://github.com/hawkup}
 * @author  Jirawat I. [@nodtem66]{@link https://github.com/nodtem66}
 */
var locale = {
  code: 'th',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;