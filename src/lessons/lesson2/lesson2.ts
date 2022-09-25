console.log('lesson 2');
export const lala = () => {
}
// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum =(num:number) => {
    return (num2:number)=>{
        return num + num2
    }
}
sum(3)(6)

// Task 02
/*
function makeCounter(){
    let count = 1
    return function (){
        return count++
    }
}
*/


const sumToto = (arg: number): number => {
    if (arg == 0) return arg
    return arg + sumToto(arg - 1)
}
console.log(sumToto(3))


/// flat на всю глубину
const makeFlat = function (arr: any) {
    return arr.reduce(function (a: any, c: any) {
        let v = c instanceof Array ? makeFlat(c) : c;
        return a.concat(v)
    }, [])
}
// Реализовать функцию makeCounter которая работает следующим образом:

const makeCounter = () => {
    let i = 0
    return i++
}

/* const counter = makeCounter();
// counter(); // 1
// counter(); // 2
 const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter())*/


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
function makeCounterr(count: number) {
    let counts = count

    function increase() {
        return counts++
    };

    function decrease() {
        return counts--
    };

    function reset() {
        return counts = 0
    };

    function set() {
        return counts = count
    }

}

/*function sumTo(arg:number){
    let result:number = 0;
    for (let i = 0 ; i <= arg; i++){
      result += i
    }
    return result
}*/
/*function sumTo(arg: number): number {
    if (arg == 1) return arg;
    return arg + sumTo(arg - 1)
}

console.log(sumTo(3))*/


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
function superSum(n: number) {
    if (n <= 0) return 0
    if (n == 1) return (num: number) => num
    let outerParams: number[] = []

    function inner(...arg: number[]) {
        outerParams = [...outerParams, ...arg]
        if (outerParams.length >= n) {
            outerParams.length = n
            return outerParams.reduce((acc, el) => acc + el)
        } else {
            return inner;
        }
    }
    return inner
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
const arr = [1, 1, 2, [3, 4,[22,5]]]
// @ts-ignore
console.log(arr.reduce((acc, val) => acc.concat(val), []));

// just a plug
function SumTo1(arg: number): number {
    if (arg <= 0) return arg
    return arg + SumTo1(arg - 1)
}
function pow(x:number,y:number):number{
    if(y == 1) return x
    return x * pow(x,y-1)
}

console.log(pow(2,2))
