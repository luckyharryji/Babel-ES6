'use strict';

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10
a[8]();
///数组指向函数对象,函数内console指向对象 i

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
//let，声明的变量仅在块级作用域内有效,不会随着循环体更改

var foo = 'outer';

function bar() {
    var func = arguments[0] === undefined ? function (x) {
        return foo;
    } : arguments[0];
    return (function () {
        var foo = 'inner';
        console.log(func()); // outer
    })();
}

bar();

var a = 1;
// 如果在node环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a; // 1

var b = 1;
window.b // undefined
;
