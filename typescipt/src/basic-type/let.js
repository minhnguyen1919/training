"use strict";
function test() {
    var str = 'sub1';
    var list1 = [1, 2, 3];
    var list2 = [1, 2, 3];
    console.log(str);
    // Tuple
    var arr;
    arr = ['hello', 1, true, 'word'];
    // Enum
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Red;
    var Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 1] = "Red";
        Color2[Color2["Green"] = 2] = "Green";
        Color2[Color2["Blue"] = 4] = "Blue";
    })(Color2 || (Color2 = {}));
    ;
    var c2 = Color2.Green;
    // Any
    var notSure;
    notSure = true;
    notSure = 10;
    notSure = 'string';
    // void
    var unusable = undefined;
    function dontReturn() {
        console.log('can not return data');
    }
}
module.exports = test;
