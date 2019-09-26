"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a1 = void 0;
var a1 = 1;
exports.a1 = a1;
setTimeout(() => {
  exports.a1 = a1 = 2;
}, 1000);