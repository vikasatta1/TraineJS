console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

class Test {
    name:string;
    constructor(name:string) {
       this.name = name}
    say(){console.log("lala")}
}
class Test2 extends Test {
    age:number;
    constructor(name:string, age:number) {
        super(name);
        this.age = age;}
    sayBye(){}
}
class Test3 extends Test2 {
    city:string;
    constructor(name:string, age:number,  city:string) {
        super(name,age);
        this.city = city;
    }
    sayYo(){}
}
let obj = new Test3("Yo",10,"YoCity")

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
const student1 = {
    name:'Vika',
    lastName: 'Morozova',
    numberGroup:50,
    success:[1,2,5,3,4]
}
const student2 = {
    name:'Anny',
    lastName: 'Alexandrova',
    numberGroup:50,
    success:[1,5,5,3,5]
}
const student3 = {
    name:'Lena',
    lastName: 'LAla',
    numberGroup:51,
    success:[1,2,2,3,2]
}
const student4 = {
    name:'Artem',
    lastName: 'Momo',
    numberGroup:51,
    success:[1,5,5,3,4]
}
const student5 = {
    name:'Nik',
    lastName: 'Morozov',
    numberGroup:52,
    success:[1,3,3,3,4]
}
const student6 = {
    name:'Alex',
    lastName: 'Roy',
    numberGroup:52,
    success:[1,2,1,3,4]
}
const students =[student1,student2,student3,student4,student5,student6]

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
export const lele = () =>{}
// just a plug
export default () => {
};