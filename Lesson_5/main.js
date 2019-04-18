"use strict";


// var str = "Я программист";
// console.log(str.charAt(0));  ///// я
// console.log(str.charAt(str.length-1));  ///// т
//
// console.log( str[0]); ///// я
//
// var str2 = str[0] + str[1] + str[3];
//
// console.log( str[3].toLowerCase() );
// console.log( str[3].toUpperCase() );
// console.log( str.indexOf('м', 2) );
// console.log( str.lastIndexOf('м', str.length) );
//
//
// var target = 'м';
// var pos = 0;
//
// while (true){
//     var foundPos = str.indexOf(target,pos);
//     if(foundPos == -1) break;
//
//     console.log(foundPos);
//     pos = foundPos +1;
// }
//
//
// console.log(str.substring(0 , 5));
// console.log(str.substr(3 , 3));
// console.log(str.slice(1 , 3));
//
// console.log('testme'.substring(-2));
// console.log('testme'.slice(-2));
//
// ////////////////////////////////////////////
// var str3 = '';
//
// for ( var i =1034 ; i <=1113; i++){
//     str3 += String.fromCharCode(i);
//
// }
// console.log(str3);
//
/////////////////////////////////////////////
//
// console.log( 'asdasdasd'.charCodeAt(0));
//
//
// /////       /////////////////         /////////////////              //////////////
//
//
// var obj = {};
//
// obj.name = 'yaroslav';
//
// obj.age = '35';
//
// console.log(obj.name + ' - ' + obj.age);
//
// delete  obj.age;
//
// console.log(obj.age);
//
////////////////////////////////////
//
// var obj2 = {
//   'name' : 'andrey',
//   'age' : '25'
// };
//
// if ('name' in obj2){
//     console.log('yes')
//
// }else {
//     console.log('no')
//
// }
// console.log( obj2.weight); ///// undefined
//
//
// //////////////////
//
// obj.name = 'lily';
// obj['name'] = 'lily';
// //-----------------------
// var key = 'name';
// obj2[key] = 'lily';
//
//
// var obj4 ={
//     'name':'',
//     'phone':'',
//     'items' : {
//         'item' :{
//             1:{
//                 'item name' : '',
//                 'prise' :100
//             },
//             2:{
//
//             }
//         },
//     },
//     'time delivery': function getPrise() {
//         console.log(1111)
//     }
// };
// obj4['time delivery']();
//
// // obj4.items['1'].prise;
// //
// // obj4['items']['1']['prise'];
//
//
// var counter = 0;
// for(var key in obj4){
//     console.log(obj4[key]);
// }
// counter ++;
//
//
// var codes = {    //////ссылка
//     '7' : 'rus',
//     '38': 'ukr',
//     '1' : 'usa'
// }; //// 1. 7. 38
//
// codes = {
//     '+7' : 'rus',
//     '+38': 'ukr',
//     '+1' : 'usa'
// }; //// 1. 7. 38
//
//
// var codes2 = codes;  /////запишет  ссылку
//
// codes2['7'] = ' бразилия';
// // alert(codes2['7']);
//
//
// var clone = {};
//
// for (var key in codes){
//     clone[key]= codes[key];
// }
//
// var arr= [];
// var arr = [ 'яблоко', 'апельсин ', 'слива' ];
// console.log(arr[0]);
// arr[0] = 'груша';
// console.log(arr[0]);
// arr[33] = 'мандарин';
// console.log(arr);
//
// var arr2 = [ 3, 'sdf', {name : 'asdasd'}, true ];
// console.log(arr2);
// arr2[1000] = 'asdad';
// console.log(arr2);
