////////////////////// 1

var a = 1 ;
// var a = '1';
// var a = 3;

if( a === '1'){
    alert(true);
}
else {
    alert(false);
}
console.log( a );

///////////////////////// 2

var item = false;
// var item = true;

if( item != true) {
    alert('Верно');
}
else {
    alert('Неверно')
}

////////////////////

if( !item) {
    alert('Верно');
}
else {
    alert('Неверно')
}

///////////////////////////////////////// 3

// var a = 4;
// var a = 0;
// var a = -3;
var a = 2;


if ( a > 0 && a < 4){
    alert('Верно');
}
else {
    alert('Неверно')
}

console.log(a);

/////////////////////////////////////// 4

var a = prompt('переменная a');
var b = prompt('переменная b');

if ( a > 3 && a < 12 || b >= 7 && b < 15){
    alert('Верно');
}
else {
    alert('Неверно')
}

console.log(a);
console.log(b);

//////////////////////////////// 5

var month = Number(prompt('месяц'));

if ( (month < 3 && month > 0 ) || month === 12 ){
    alert('Зима');
}
else if (month >= 3 && month <= 5 ){
    alert('Весна');
}
else if (month >= 6 && month <=8 ){
    alert('Лето');
}
else if (month >=9 && month <=11 ){
    alert('Осень');
}
else {
    alert('неверное значение, число должно быть от 1-12')
}




//////////////////////////////  6

var i = 0;
do{
    console.log(i);
    i +=2
} while ( i <= 100);

///////////////////////////////////////////

var i;
for( i = 0; i <= 100; i+=2){
    console.log(i);
}

/////////////////////////////////////////

for (var i = 0; i <= 100; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
}





