"use strict";

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
    // console.log(a[i]);
}
a[6](); // 10
a[8]();

var a = [];

var _loop = function (_i) {
    a[_i] = function () {
        console.log(_i);
    };
};

for (var _i = 0; _i < 10; _i++) {
    _loop(_i);
}
a[6](); // 6
