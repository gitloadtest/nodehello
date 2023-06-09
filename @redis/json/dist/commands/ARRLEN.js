"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArguments = exports.IS_READ_ONLY = exports.FIRST_KEY_INDEX = void 0;
exports.FIRST_KEY_INDEX = 1;
exports.IS_READ_ONLY = true;
function transformArguments(key, path) {
    const args = ['JSON.ARRLEN', key];
    if (path) {
        args.push(path);
    }
    return args;
}
exports.transformArguments = transformArguments;
