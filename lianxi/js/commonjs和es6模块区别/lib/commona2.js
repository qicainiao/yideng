"use strict";

var a2 = 2;
module.exports = a2;
setTimeout(() => {
  a2 = 3;
}, 1000);