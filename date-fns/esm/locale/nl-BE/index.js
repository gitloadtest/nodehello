import formatDistance from "./_lib/formatDistance/index.js";
import formatLong from "./_lib/formatLong/index.js";
import formatRelative from "./_lib/formatRelative/index.js";
import localize from "./_lib/localize/index.js";
import match from "./_lib/match/index.js";
/**
 * @type {Locale}
 * @category Locales
 * @summary Dutch locale.
 * @language Dutch
 * @iso-639-2 nld
 * @author Jorik Tangelder [@jtangelder]{@link https://github.com/jtangelder}
 * @author Ruben Stolk [@rubenstolk]{@link https://github.com/rubenstolk}
 * @author Lode Vanhove [@bitcrumb]{@link https://github.com/bitcrumb}
 * @author Alex Hoeing [@dcbn]{@link https://github.com/dcbn}
 */
var locale = {
  code: 'nl-BE',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
  }
};
export default locale;