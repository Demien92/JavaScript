"use strict";


/////////////////  1


function isNumberInRange(number) {
    if (number > 0 && number <10){
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
}
isNumberInRange(22);



//////////////////  2

function isEven(a) {
    if ( a % 2 == 0) {
        console.log('true');
        return true;
    }else {
        console.log('false');
        return false;
    }
}
isEven(24);



/////////////////////    3

var value = +prompt('value?');

switch(value) {
    case 0 :
        console.log('0');
        break;
    case 1 :

        console.log('1');
        break;
    case 2 :
    case 3 :
        console.log('2,3');
        break;
}

///////////////////////// 4

function min( a, b) {

    if ( a < b) {
        console.log(a);
        return a;
    }else {

        console.log(b);
        return b;
    }
}
min( 3 , 5);



