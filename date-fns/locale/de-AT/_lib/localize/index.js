"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['v.Chr.', 'n.Chr.'],
  abbreviated: ['v.Chr.', 'n.Chr.'],
  wide: ['vor Christus', 'nach Christus']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
};

// Note: in German, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jän', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  wide: ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};

// https://st.unicode.org/cldr-apps/v#/de_AT/Gregorian/
var formattingMonthValues = {
  narrow: monthValues.narrow,
  abbreviated: ['Jän.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
  wide: monthValues.wide
};
var dayValues = {
  narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  abbreviated: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  wide: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
};

// https://www.unicode.org/cldr/charts/32/summary/de.html#1881
var dayPeriodValues = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachm.',
    evening: 'Abend',
    night: 'Nacht'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachm.',
    evening: 'abends',
    night: 'nachts'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + '.';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0, _index.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0, _index.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0, _index.default)({
    values: monthValues,
    formattingValues: formattingMonthValues,
    defaultWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;