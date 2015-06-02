var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); // 10
a[8]();
///数组指向函数对象,函数内console指向对象 i 

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); // 6
//let，声明的变量仅在块级作用域内有效,不会随着循环体更改

let foo = 'outer';

function bar(func = x => foo) {
  let foo = 'inner';
  console.log(func()); // outer
}

bar();

var a = 1;
// 如果在node环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined