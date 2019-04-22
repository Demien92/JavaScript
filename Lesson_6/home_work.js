///////////////////////
// 1. Дан массив с числами (Пример: var arr = [2, -5, 1, -2, 0, -3, 2, -14]) - массив может быть и другим.
// 1) В начале вам нужно убрать из него все отрицательные числа используя filter
// 2) Извлесь корень из каждого значения этого массива и записать в переменную. Используя map.
// 3) Вывести массив в консоль

var arr = [2, -5, 1, -2, 0, -3, 2, -14];

var positiveArr = arr.filter(function (number) {
    return number > 0;
});

console.log(positiveArr);

var arr2 = positiveArr.map(function (elm) {
    return Math.sqrt(elm)

});
console.log(arr2);

//////////////////////////////////////////
// 2. Дан массив с числами (Пример: var arr = [4, 3, 5, 5, 0, 4, 8, 6]) - массив может быть и другим.
//     Нужно найти сумму элементов от начала и до нуля. (В примере это первые 4 элемента)
// Использовать функция reduce
//

var arr3 = [ 4, 3, 5, 5, 0, 4, 8, 6];
var indicator = true;

var result = arr3.reduce(function (sum, current) {
    if (current === 0) {
        indicator = false;
    }
    if (indicator) {
        return sum + current;
    } else {
        return sum;
    }
},0);

console.log(result);


/////////////////////////////////////
// 3. Напишите функцию summArguments, которая сложит все аргументы переданные в функцию. Например
// summArguments(10, 1, 2, 5); // 18
// summArguments(10); // 10

function summArguments () {
    var sum = 0;
    for (var i = 0; arguments.length > i; i++) {
        sum = sum + arguments[i]
    }
    console.log(sum);
}
summArguments(10, 1, 2, 5);
summArguments(10);