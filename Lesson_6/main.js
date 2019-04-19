"use strict";


var arr = new Array('Яблоко', 'Груша');

var arr2 = new Array(100);

var matrix =[
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

console.log(matrix[0][2]);


/* split */

var names = 'Маша, Надя, Марина,Наташа';

var arr = names.split(',');  /////// names.split(',',2);

console.log(arr);

/* join */

var arr3 = ['Маша', 'Надя', 'Марина','Наташа'];

var str = arr3.join(';');

/* удалить из массива */

var arr4 = ['Маша', 'Надя', 'Марина','Наташа'];

delete arr4 [1];

console.log(arr4[1]);

/* splice */

arr4.splice(1, 1);

console.log(arr4[1]);

arr4.splice(1, 2, 'katy', 'oly');

console.log(arr4);

var removed = arr4.splice(1, 2);

console.log(removed);

arr4.splice(2,0, 'natasha', 'karina');

arr4.slice(-1, 0, 3, 4);

console.log(arr4);

/* slice */

var arr5 = [' почему', 'надо', 'учить','javascript' ];

var arr6 = arr5.slice(1,3); /// 'надо', 'учить'

var arr6 = arr5.slice(1); ////'надо', 'учить','javascript'

var arr6 = arr5.slice(-1, 2); //// 'учить'

console.log(arr6);

var arr6 = arr5.slice(); //// 'почему', 'надо', 'учить','javascript'

/*  ортировка */

var arr7 = [1,2, 15];

arr7.sort();

console.log(arr7); /// 1,15,2

function compareNumeric(a,b) {
    if(a>b){return 1;}
    if(a<b){return -1;}
}

arr7.sort(compareNumeric);

/* revers */

var arr8 = [1,2,3];

arr8.reverse();

console.log(arr8);

/* concat */

var arr9 = [1,2,3,4];

var nawArr = arr9.concat(arr8); //concat(1,2); concat([1,2],3);

// console.log(newArr);

/* indexOf / lastindexOf */

console.log(arr9.indexOf('2'));  /// -1

console.log(arr9.indexOf(2));  /// 1

/* Object.keys(obj) */

var user = {

    name: 'pety',
    age: 30,
};
var keys = Object.keys(user);

console.log(keys);

/* forEch */

var arr10 = ["apple", "pear", "orange"];

arr10.forEach(function(item, i, arr){
    console.log(i+':'+item+'(массив:'+arr+')');
});

/* filter */

var arr11 = [1, -1, 2, -2, 3];

var positiveArr = arr11.filter(function (number) {
   return number > 0;
});

console.log(positiveArr);

/* map */

var names = ['html', 'scc','самый популярный язык javascript'];

var namelengths = names.map(function (name) {
    if(name ==='scc'){
        return'html';
    }
    return name.length
});

/* every \ some */

var arr12 = [1, -1,2,-2,3];

function isPositive(number) {
    return number >0;

}
console.log(arr12.every(isPositive));  ///false
console.log(arr12.every(isPositive));  ////true

/* reduce \ reduceRight */

var arr13 = [1,2,3,4,5];

var result = arr13.reduce(function (sum, current) {
    return sum + current;
},0);

console.log(result);

/*
1 - sum = 0 current = 1
1 - sum = 0+1 current = 2
1 - sum = 0+1+2 current = 3
1 - sum = 0+1+2+3 current = 4
1 - sum = 0+1+2+3+4 current = 5
return = 15
 */

/* "arguments" */

// function getPhone(name = 'ivanov') {
//     name = name || 'ivanov';
// }

function getPhone(name, address) {

    var address = arguments[i];
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
getPhone('name', 'address');

/*  */











