// "use strict"
//
// console.log('Б' > 'А');
//
// console.log('Баннан' > 'Анна'); // алфавитном порядке очередность букв
//
// console.log('а' > 'А'); // маленькие в приоритете больше
//
// console.log('а' > 'Б'); // маленькие в приоритете больше
//
// console.log('2' > 1); // текст '2' переходит в цыфру и сравнивает уже цыфры
//
// console.log( 0 == false); //  false переходит в 0  (0=0)
//
// console.log( '' == false); //  false переходит в 0 ,'' переходит в 0 , (0=0)
//
// console.log( 0 === false ); //  строгое равенство false
//
// console.log( 0 !== false ); //  строгое равенство false
//
// console.log( null == undefined ); //   (null -не задано), (undefined = не определено) их стравневают только между собой
//
// ///null = 0
//
// ///undefined = Nan  //  не сравневать всегда будет  false
//
// console.log( null > 0 ); //  false
//
// console.log( null >= 0 ); //  true
//
// console.log( null <= 0 ); //  true
//
// alert('привет') // модальное окно  alert ( попапы )
//
// ///////////////////////////////////////////////
//
// var result = prompt('введи привет', 'пока')  //поле для ввода
// console.log(result);
//
// //////////////////////////////////////////////////
//
// result = confirm('сейчас 2019?');  ///текст вопроса
// console.log(result);
//
// //////////////////////////////////////////////////
//
// var year = prompt('какой сейчас год');
// if(year != 2019) {
//     alert('не верно');
// }
//
// ///////////////////////////////
//
// if(year == 2019){
//     alert('yes');
// }
// else {
//     alert('no')
// }
// ////////////////////////////////
//
// if ( year <2019){
//     console.log('чуть больше');
// }else if ( year > 2019){
//     console.log('чуть меньше');
// }else {
//     console.log('верно');
// }
// ////////////////////////////////
//
// var age = 13;
// // var access =(age > 14)? true : false;
// var access =(age > 14)? 'yes' : 'no';
//
//
// var massege = (age < 3 ) ? ' пивет малыш!' :
//     (age < 18) ? 'привет!' :
//     (age <100) ? 'Здраствуйте!' :
//      'какой большой возраст';
//
//
//
// ///////////////////////////////////////////
//
//  //////   || - или
// console.log( true || true ); // true
// console.log( true || false ); // true
// console.log( false || false ); // false
//
// var age =13;
// if ( age < 3 || age > 100)  //false
// if ( age < 3 || age > 100 || age >50 || age > 80) { //false
//
// }
//
// if ( age < 3 || age > 100 || age >50 || age > 12) { //true
//
// }else{
//     //false
// }
// /////////////////
//
// var x;
// true || ( x = 1); ///
// alert(x);
//
// var x;
// false || ( x = 1); ////
// alert(x);
//
// //////////////////////////////
//
// console.log(true && true); true
// console.log(true && false); false
// console.log(false && false); false
//
//
// var hours = 12,
//     minute = 30;
// if (hours == 12 && minute == 30){
//     alert('время 12:30');
// }
//
// console.log( 1 && 5 && 4); ////всегда последнее
// ////////
//
// alert( 5 || 1 && 0); // 5 или приоритет больше
//
// //////
// var value;
// var result = ! value;  ///false
//
// console.log(result);  ///true
//
// if(! value){
//
// }
// /// ! переварачивает true . false ( !! преобразует назад  )
// console.log( !! 'привет'); ///true
//
//
// console.log( + '   \n 123  \n  \n ');
// console.log( + '   \n asdsd  \n  \n '); /// NaN не преобразует
//
// console.log( + true); //1
// console.log( + false); //0
//
// console.log('\n' == false); // 0 = 0 true
// console.log('1' == true); // 1=1 true









