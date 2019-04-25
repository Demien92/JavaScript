/////////////////////////////////////////
// 1. Нужно вывести в консоль сколько минут осталось до конца текущего дня.

function getSecondsToTomorrow() {

    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    var diff = tomorrow - now;
    return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());


///////////////////////////////////////
// 2. Нужно вывести в консоль сколько секунд прошло с начала текущего дня.

function getSecondsToday() {
    var d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday());

/////////////////////////////////
// 3. Выведите в консоль название для недели (например: Понедельник), которая была 25 января 2013

var date = new Date(2013, 0, 25);
var day = date.getDay();

function showDay(day) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[day];
}

console.log(showDay(day));

///////////////////////////////////////////
// 4. Сделайте скрипт, который будет просить пользователя ввести дату своего рождения в формате 1990-10-01
// и в ответ будет выдавать сколько дней осталось до его дня рождения.


var bDay = prompt('Ваша дата рождения - ');

var currentDate = new Date();

var toYear = currentDate.getFullYear();

var toDate = bDay.split('-').map(function(el, i, arr ) {
    if (el.length === 4){
        return toYear;
    }else  {
        return el
    }
    // el.length === 4 ? toYear : el
} ).join('-');


var convertDate = new Date(toDate);

var resultDate = Math.round((convertDate - currentDate) / (1000*60*60*24));

var result = resultDate < 0 ? 365 + resultDate : resultDate;

console.log(result);


