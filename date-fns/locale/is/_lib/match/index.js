"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../_lib/buildMatchFn/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/buildMatchPatternFn/index.js"));
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+(\.)?/i;
var matchEraPatterns = {
  narrow: /^(f\.Kr\.|e\.Kr\.)/i,
  abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
  wide: /^(fyrir Krist|eftir Krist)/i
};
var parseEraPatterns = {
  any: [/^(f\.Kr\.)/i, /^(e\.Kr\.)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]\.?/i,
  abbreviated: /^q[1234]\.?/i,
  wide: /^[1234]\.? fjórðungur/i
};
var parseQuarterPatterns = {
  any: [/1\.?/i, /2\.?/i, /3\.?/i, /4\.?/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmásónd]/i,
  abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,
  wide: /^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^á/i, /^s/i, /^ó/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maí/i, /^jún/i, /^júl/i, /^áu/i, /^s/i, /^ó/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|má|þr|mi|fi|fö|la)/i,
  abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i,
  wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^þ/i, /^m/i, /^f/i, /^f/i, /^l/i],
  any: [/^su/i, /^má/i, /^þr/i, /^mi/i, /^fi/i, /^fö/i, /^la/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,
  any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^mi/i,
    noon: /^há/i,
    morning: /morgunn/i,
    afternoon: /síðdegi/i,
    evening: /kvöld/i,
    night: /nótt/i
  }
};
var match = {
  ordinalNumber: (0, _index2.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0, _index.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0, _index.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0, _index.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0, _index.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0, _index.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var _default = match;
exports.default = _default;
module.exports = exports.default;