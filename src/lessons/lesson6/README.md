Занятие 6 (Class):
В JavaScript класс – это разновидность функции.
Изучить ссылки в файле lesson6.ts

Задания:
1) по первой ссылке https://learn.javascript.ru/classes разобраться с пунктами 1,2 и 6.
Пункты 3,4 неплохо посмотреть дополнительно. Оставшиеся пункты изучать по желанию (по-факту сейчас вам это не нужно)
2) У тайпскрипта в классах есть свои модификаторы Public, private, and protected - их особенности по желанию
изучаем самостоятельно - описание есть по ссылке https://www.typescriptlang.org/docs/handbook/classes.html
3) Решить все задачи.

Базовый синтаксис выглядит так:
class MyClass {
// методы класса
constructor() { ... }
method1() { ... }
method2() { ... }
method3() { ... }
...
}
Затем используйте вызов new MyClass() для создания нового объекта со всеми перечисленными методами.

При этом автоматически вызывается метод constructor(),
в нём мы можем инициализировать объект.

Например:

class User {
  constructor(name) {
  this.name = name;
}
  sayHi() {
  alert(this.name);
}
}

// Использование:
let user = new User("Иван");
user.sayHi();

!!Методы в классе не разделяются запятой

class User {
constructor(name){
  this.name = name;
}
sayHi() { alert(this.name); }
}

// доказательство: User - это функция
alert(typeof User); // function

///////////
class User {
constructor(name) { this.name = name; }
sayHi() { alert(this.name); }
}

// класс - это функция
alert(typeof User); // function

// ...или, если точнее, это метод constructor
alert(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
alert(User.prototype.sayHi); // alert(this.name);

// в прототипе ровно 2 метода
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

//////////////
Классы всегда используют use strict. Весь код 
внутри класса автоматически находится в строгом режиме.

////////
Итого
Базовый синтаксис для классов выглядит так:

class MyClass {
prop = value; // свойство
constructor(...) { // конструктор
// ...
}
method(...) {} // метод
get something(...) {} // геттер
set something(...) {} // сеттер
[Symbol.iterator]() {} // метод с
вычисляемым именем (здесь - символом)
// ...
}
MyClass технически является функцией (той, которую мы определяем 
как constructor), в то время как методы, геттеры и сеттеры
записываются в MyClass.prototype.

//Насдедование
super.method(...) вызывает родительский метод.
super(...) для вызова родительского конструктора
(работает только внутри нашего конструктора).

У стрелочных функций нет super

