"use strict";

/////////////////////////////////
// 1. Написать функцию с названием searchArrayWord и ищет слово в массиве.
// Она принимает 2 параметра -
// 1) Слово которое нужно найти
// 2) Массив в котором находятся элементы со словами. Например ['Кот', 'Собака', 'Жираф' ]
// Функция должна вернуть true или false\


var array = ['Кот', 'Собака', 'Жираф'];

function searchArrayWord(){
    if (array.indexOf('Жираф') === -1) {
        console.log('false');
       return false;
    }else{
        console.log('true');
        return true;
    }
}
console.log(searchArrayWord());



// var array = ['Кот', 'Собака', 'Жираф'];
//
//
//
// function searchArrayWord() {
//
//     if (array.indexOf(-1)){
//         console.log('true');
//         return true;
//     }else {
//
//         console.log('false');
//         return false;
//
//     }
// }
// console.log(searchArrayWord());



// var searchArrayWord = {
//   'cat' : '',
//   'dog' : '',
//   'Giraffe' : ''
// };
//
// if ('cat' in searchArrayWord){
//     console.log('true');
//
// }else {
//     console.log('false');
//
// }
// console.log(searchArrayWord);

///////////////////////////////////
// 2. Определить среднее арифмитическое чисел из массива.
//     var arr = [1, 2, 3, 7, 6, 9];

var arr = [1, 2, 3, 7, 6, 9];
var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
console.log(avg);


///////////////////////////////////
// 3. Перевернуть элементы массива задом наперед. Не используя reverse(мы еще не учили его)
// var arr2 = [1, 3, 5, 6, 7, 9];

var arr2 = [1, 3, 5, 6, 7, 9];
var i = 0;
var newArr = [], num;
for (i = arr2.length; i > 0; i--) {
    num = arr2.length - i;
    newArr[i] = arr2[num];
}
console.log(newArr);

/////////////////////////////////
// 4. Дан объект {html:'html', css: 'CSS', js: 'ECMA'}
// Нужно получить массив ключей этого объекта и отобразить в консоли.

var obj ={
    'html':'html',
    'css':'CSS',
    'js' : 'ECMA',
};
console.log(Object.keys(obj));

//////////////////////////////////
// 5. Создайте объект описывающий Заказ на сайте.
//     Создать можно любым из способов - даже просто написать консрукцию var obj = {...}.
//     Главное учесть, что единицы измерения обычно не записываются в объект, а
// записываются просто цифры переведенные к общей единице измерения(например кг переводятся в граммы).
//
// В нем должно храниться:
//     - Имя покупателя
// - Телефон покупателя
// - Адрес покупателя
// - Общая сумма заказа
// - Общий вес заказа
// - Купленные товары:
//     1 товар - Чашка \ 100 грн. \ вес 200 грамм
// 2 товар - Ложка \ 30 грн. \ вес 100 грамм
// 3 товар - Чайник \ 550 грн. \ вес 2 кг
// 4 товар - Кружка \ 150 грн \ вес 400 грамм

var order ={
    'name':'',
    'phone':'',
    'address':'',
    'all sum':'',
    'all weight':'',
    'products' : {
        1:{
            'item name' : 'Чашка',
            'price' :100,
            'weight' : 200,
        },
        2:{
            'item name' : 'Ложка',
            'price' :30,
            'weight' : 100,

        },
        3:{
            'item name' : 'Чайник',
            'price' :550,
            'weight' : 2000,
        },
        4:{
            'item name' : 'Кружка',
            'price' :150,
            'weight' : 400,
        },

    },
};
console.log(order);


