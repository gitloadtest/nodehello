"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformReply = exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const GEORADIUSBYMEMBER_1 = require("./GEORADIUSBYMEMBER");
var GEORADIUSBYMEMBER_2 = require("./GEORADIUSBYMEMBER");
Object.defineProperty(exports, "FIRST_KEY_INDEX", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_2.FIRST_KEY_INDEX; } });
Object.defineProperty(exports, "IS_READ_ONLY", { enumerable: true, get: function () { return GEORADIUSBYMEMBER_2.IS_READ_ONLY; } });
function transformArguments(key, member, radius, unit, replyWith, options) {
    const args = (0, GEORADIUSBYMEMBER_1.transformArguments)(key, member, radius, unit, options);
    args.push(...replyWith);
    args.preserve = replyWith;
    return args;
}
exports.transformArguments = transformArguments;
var generic_transformers_1 = require("./generic-transformers");
Object.defineProperty(exports, "transformReply", { enumerable: true, get: function () { return generic_transformers_1.transformGeoMembersWithReply; } });
