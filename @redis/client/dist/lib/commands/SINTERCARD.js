"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
const generic_transformers_1 = require("./generic-transformers");
exports.FIRST_KEY_INDEX = 2;
exports.IS_READ_ONLY = true;
function transformArguments(keys, limit) {
    const args = (0, generic_transformers_1.pushVerdictArgument)(['SINTERCARD'], keys);
    if (limit) {
        args.push('LIMIT', limit.toString());
    }
    return args;
}
exports.transformArguments = transformArguments;
