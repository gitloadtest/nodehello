"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    var weekday = date.getUTCDay();
    var last = weekday === 0 || weekday === 6 ? 'último' : 'última';
    return "'" + last + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale[token];
  if (typeof format === 'function') {
    return format(date);
  }
  return format;
};
var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;