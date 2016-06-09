"use strict";
function func1() {
    console.log('F1');
}
exports.func1 = func1;
function func2() {
    console.log('F2');
}
exports.func2 = func2;
function func3() {
    console.log('F3');
}
exports.func3 = func3;
function default_1() {
    console.log('F default');
}
exports.__esModule = true;
exports["default"] = default_1;
