"use strict";

(function func() {
 console.log('hi');
}());


var car ={
    'name': 'ford',
    'model': 'mustang',
    'engine': 2.0,
    'wheels': 4,
    'getSpeed': function () {
        console.log('200 km/h');
    },
    'setRotateRight': function (deg) {
        console.log('rotate right' + deg + ' deg');
    }
};

car.setRotateRight(45);
car.getFuel =function () {
    console.log('80%');
};


function func(name, age) {
    alert('hi' + name + age)
}

// setTimeout(func, 2000);
setTimeout(func, 2000,  'vova',  '20');

