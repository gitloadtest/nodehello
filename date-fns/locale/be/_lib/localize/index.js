"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildLocalizeFn/index.js"));
var eraValues = {
  narrow: ['да н.э.', 'н.э.'],
  abbreviated: ['да н. э.', 'н. э.'],
  wide: ['да нашай эры', 'нашай эры']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1-ы кв.', '2-і кв.', '3-і кв.', '4-ы кв.'],
  wide: ['1-ы квартал', '2-і квартал', '3-і квартал', '4-ы квартал']
};
var monthValues = {
  narrow: ['С', 'Л', 'С', 'К', 'М', 'Ч', 'Л', 'Ж', 'В', 'К', 'Л', 'С'],
  abbreviated: ['студз.', 'лют.', 'сак.', 'крас.', 'май', 'чэрв.', 'ліп.', 'жн.', 'вер.', 'кастр.', 'ліст.', 'снеж.'],
  wide: ['студзень', 'люты', 'сакавік', 'красавік', 'май', 'чэрвень', 'ліпень', 'жнівень', 'верасень', 'кастрычнік', 'лістапад', 'снежань']
};
var formattingMonthValues = {
  narrow: ['С', 'Л', 'С', 'К', 'М', 'Ч', 'Л', 'Ж', 'В', 'К', 'Л', 'С'],
  abbreviated: ['студз.', 'лют.', 'сак.', 'крас.', 'мая', 'чэрв.', 'ліп.', 'жн.', 'вер.', 'кастр.', 'ліст.', 'снеж.'],
  wide: ['студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня', 'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня']
};
var dayValues = {
  narrow: ['Н', 'П', 'А', 'С', 'Ч', 'П', 'С'],
  short: ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб'],
  abbreviated: ['нядз', 'пан', 'аўт', 'сер', 'чац', 'пят', 'суб'],
  wide: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота']
};
var dayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дзень',
    evening: 'веч.',
    night: 'ноч'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дзень',
    evening: 'веч.',
    night: 'ноч'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўнач',
    noon: 'поўдзень',
    morning: 'раніца',
    afternoon: 'дзень',
    evening: 'вечар',
    night: 'ноч'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночы'
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночы'
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўнач',
    noon: 'поўдзень',
    morning: 'раніцы',
    afternoon: 'дня',
    evening: 'вечара',
    night: 'ночы'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  var number = Number(dirtyNumber);
  var suffix;

  /** Though it's an incorrect ordinal form of a date we use it here for consistency with other similar locales (ru, uk)
   *  For date-month combinations should be used `d` formatter.
   *  Correct:   `d MMMM` (4 верасня)
   *  Incorrect: `do MMMM` (4-га верасня)
   *
   *  But following the consistency leads to mistakes for literal uses of `do` formatter (ordinal day of month).
   *  So for phrase "5th day of month" (`do дзень месяца`)
   *  library will produce:            `5-га дзень месяца`
   *  but correct spelling should be:  `5-ы дзень месяца`
   *
   *  So I guess there should be a stand-alone and a formatting version of "day of month" formatters
   */
  if (unit === 'date') {
    suffix = '-га';
  } else if (unit === 'hour' || unit === 'minute' || unit === 'second') {
    suffix = '-я';
  } else {
    suffix = (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? '-і' : '-ы';
  }
  return number + suffix;
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
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide'
  }),
  day: (0, _index.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0, _index.default)({
    values: dayPeriodValues,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var _default = localize;
exports.default = _default;
module.exports = exports.default;