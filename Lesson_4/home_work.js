"use strict";


////////////////1

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);

}
console.log( fib(1) ); // 1
console.log( fib(2) ); // 1
console.log( fib(3) ); // 2
console.log( fib(4) ); // 3
console.log( fib(5) ); // 5
console.log( fib(6) ); // 8
console.log( fib(7) ); // 13
console.log( fib(8) ); // 21




/////////////////2


var n=1000;
var num =0;

while (n >50){
    num++;
    n /=2;
}
console.log(n);
console.log(num);