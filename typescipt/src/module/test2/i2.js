"use strict";
// import all
var e2 = require('./e2');
console.log(e2);
// import default
var e2_1 = require('./e2');
console.log(e2_1["default"]);
// import func2 only
var e2_2 = require('./e2');
console.log(e2_2.func2);
// import func1 and func3
var e2_3 = require('./e2');
console.log(e2_3.func1);
console.log(e2_3.func3);
