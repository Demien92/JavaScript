// "use strict";
//
//
// //////////////////////////////////////////////
//
// var params =  'age , name';
// var code = 'console.log(age + " - " + name);';
// var sum = new Function (params, code);
// sum ( 25, 'valera');
//
// ////////////////////////////////////////////
//
//
// var x =2;
// var n =4;
// function pow(x , n) {
//     if(n !=1){
//         return x * pow( x , n -1)
//     }
//     else {
//         return x;
//     }
// }
// console.log(pow(x , n));
//
// function  pow (x , n) {
//     var result = x;
//     for (var i =1; i<n; i++){
//         result *=x;
//     }
//     return result
//
// }
//
// /////////////////////////////////////////
//
//
// var f = function (name) {
//
// };
// f = function sayHi(name) {
//
// };
//
// var f =function factorial(n) {
//     return n ? n*factorial(n-1) : 1;
//
// }
// console.log(f(5));
//
// var g = f ;
// f = null;
// console.log(g(5));
// ////////////////////////////////
//
// console.log('привет, мир'. length);
//
// console.log('виктор'. toUpperCase());
//
// var n = 200.333;
// console.log(n. toFixed(2));
//
// ///////////////////////////////////////
//
// console.log( isNaN(0/0)); ////true
//
// isFinite(10);
//
// //////////////////////////////////////
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinity(n);
// }
//
// var n =255;
// console.log(n.toString(16));
//
//
// /////////////////////////////////
//
// Math.floor(3.1); ////3
// Math.ceil(3.1); ////4
// Math.round(3.1); ////3
//
// var n =3.456;
// console.log((Math.round((n*100)/100)));  ///3.456 = 345.6 = 346 = 3.46
//
// var n = 12.35;
// console.log(n.toFixed(5)); ////12.35000
//
// alert(0.1 + 0.2 == 0.3);
//
//
// alert((0.1 *10 + 0.2 *10 ) /10);
//
//
// var result = 0.1 +0.2;
// console.log(+result.toFixed(10));
//
//
//
// console.log(Math.random()); ///random  0-1
//
// function randpmThis(a, b) {
//     return(( b-a )*Math.random()+a).toFixed();
// }
// console.log(randpmThis(0, 1000));
//
// /*
//
// \b - backspace
// \n - перенос чистой строки
// \r - enter перенос, абзац
// \t - tab
// \u12E6 - unicode
//
// */
//
// console.log('hi \u12E6 andrei');