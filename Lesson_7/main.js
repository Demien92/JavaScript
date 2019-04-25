"use strict";


var now = new Date();

console.log(now);
var jan02_1970 = new Date(3600*24*1000); ///милиськунд

console.log(jan02_1970);  //// 01 января 1970 начало отщета

var date1 = new Date (2011,0,1,0,0,0,0,);
console.log(date1);


var fullDate = new Date();
var fullDate = fullDate.getFullYear();
console.log(fullDate);  ////2019


var date2 = new Date();
console.log(date2.getHours());
console.log(date2.getUTCHours());

var date3 = new Date (2013, 0,32);

console.log(date3);

var date4 = date3.setDate(date3.getDate()+3);
console.log(date4);

date3.setDate(1);

var options ={
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute:'numeric',
    seconds: 'numeric'
};
console.log(date3.toLocaleString('en-Us'));

var a = 5;
console.log(window.a);


var phrase = 'hi';

function sayHi(name) {
    console.log(phrase + ',' + name);
}
sayHi('vasy');

phrase= 'bb';
sayHi('vasy');



function sayHiBye(firstName, LastName) {
    console.log('hi ' + getFullName());
    console.log('bb ' + getFullName());
    function getFullName() {
        return firstName + ' ' + LastName;
    }
}
sayHiBye('vasy', 'petrov');

function makeCounter() {
    var currentCounter = 1;
    return function () {
        return currentCounter++;
    }
}

var counter = makeCounter();

console.log(counter());