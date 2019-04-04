////1
var
    min = 60, // минуты
    sec = 60, //секунды
    h = 3 //часы
;
var all_sec= ( sec * min * h ); // 10800
console.log(all_sec);


////2
var num = 1;
num+=12; //13
num-=14; // -1
num*=5;  // -5
num/=7;  // -0.7142...
num++;  // 0.7142...
num--;  // -0.7142...
alert( num );

////3
var a = 10, b = 2, c = 5;
alert ( a + +b + +c ); // 17

////4
var a = 17, b = 10;
var c = ( a -b ); // 7
var d = 7;
var result = ( c + d ); // 14
alert( result );

//// 5
var name;
name= 'Ярослав';
alert( 'Привет,' + name );
////