"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = isError;
function isError(err) {
    if (err instanceof Error) {
        console.log("Error");
    }
}
