

/*let num = 0
for (let i = 1; i <= 50 ;i++){
    console.log(i)
}*/
/*
let arr = [2, 3, 4, 5]
let pr = 1
for (let i = 0; i <arr.length ;i++){
    pr = pr * arr[i]
}
console.log(pr)

let obj = {
    Минск:'Беларусь',
    Москва:'Россия',
    Киев:'Украина'
}
for(let key in obj){
    console.log(`${key} - это ${obj[key]}`)
}

let num = 10
while (num < 33){
    num++
    console.log(num)
}*/
/*let a = 10
let b = 3
let ost = 10%3
console.log(ost)
if (a%b === 0){
    console.log( 'Делится'   )
}else{
    console.log( 'Делится с остатком'   )
}

let st =Math.pow(2,10)
console.log(st)

let q = Math.sqrt(245)
console.log(q)
let arr = [4, 2, 5, 19, 13, 0, 10]
let num = 0
for (let i = 0; i< arr.length; i++){
    num += Math.pow(arr[i],3)
}

let qr = Math.sqrt(num)
console.log(qr)*/

/*let factorial = (num)=> {
    let result = 1
    for (let i = 1;i<=num;i++){
        result*=i
    }
    return result
}
console.log(factorial(5))
let str = 'abcde';
let sub = str.slice(-1);
console.log(sub);*/

//Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
/*
let str = 'aaa@bbb@ccc'
let arr = str.split('')
let result  = arr.map(el=> {if(el=== "@"){
    return "!"
} else {
    return el
}})
console.log(result)
*/

//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
/*let str = 'aaa bbb ccc'
let res1 = str.substr(4,3)
console.log(res1)
let res2 = str.slice(4,7)
console.log(res2)
let res3 = str.substring(4,7)
console.log(res3)*/

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
/*
let date = '2025-12-31'
//'31/12/2025'
let res = date.split('-')
let log = res[2] + '/' + res[1] + '/' +  res[0]
console.log(log)*/


                 // Дана строка 'js'. Сделайте из нее строку 'JS'.
//let str = 'js'
//console.log(str.toUpperCase())

                 //Дана строка 'JS'. Сделайте из нее строку 'js'.
//let str1 = 'JS'
//console.log(str.toLowerCase())

                  //Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.\

/*let str = 'я учу javascript!'
console.log(str.length)*/

                   /*
                    Дана строка 'я учу javascript!'.
                    Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами
                    (через substr, substring, slice).
                    */

/*let str = 'я учу javascript!'
let lern = str.slice(2,16)
console.log(lern)*/

                    //Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

let str = 'я учу javascript!'
console.log(str.indexOf('учу'))

                    /*Дана переменная str, в которой хранится какой-либо текст.
                     Реализуйте обрезание длинного текста по следующему принципу:
                     если количество символов этого текста больше заданного в переменной n,
                    то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
                    В противном случае в переменную result запишем содержимое переменной str.*/

//Работа с replace
//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

//Работа с split
//Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
//
//  Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
//
//  В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

//Работа с join
//Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

//Задачи

//Преобразуйте первую букву строки в верхний регистр.
//
//  Преобразуйте первую букву каждого слова строки в верхний регистр.
//
//  Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.