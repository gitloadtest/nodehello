"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, min, max) {
    return [
        'ZLEXCOUNT',
        key,
        min,
        max
    ];
}
exports.transformArguments = transformArguments;
