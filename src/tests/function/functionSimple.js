// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
let fun1 = (num) => {
    return num ** 2
}
console.log(fun1(10))

//  Сделайте функцию, которая возвращает сумму двух чисел.
let fun2 = (num1, num2) => {
    return num1 + num2
}

//  Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

let fun3 = (num1, num2) => {
    return num1 - num2
}

//  Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

let funDay = (num) => {
    switch (num){
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        case 7:
            return 'Воскресенье';
    }
}

console.log(funDay(1))
console.log(funDay(5))
console.log(funDay(10))