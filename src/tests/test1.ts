import {strict} from "assert";
import {log} from "util";

export const test = () => {

}

/*
function isUnique(string: string) {
    /!*for(let i = 0; i < string.length; i++){
        const value = string[i]
        if(string.lastIndexOf(value) !== i){
            return false
        }
    }
    return true*!/
    /!*    const set = new Set()
        for (let i = 0; i < string.length; i++) {
        const value = string[i]
            if(set.has(value)){
                return false
            }
            set.add(value)
        }
        return true*!/
    return new Set(string).size === string.length

}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false

// @ts-ignore
function flatten(array: any) {
    const res = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            // @ts-ignore
            const flat = flatten(array[i])
            for (let j = 0; j < flat.length; j++) {
                res.push(flat[j])
            }
        } else {
            res.push(array[i])
        }
    }
    return res
    /!*  return array.flat(3)*!/
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]

function removeDupes(str: string) {
    const res: Array<string> = []
    const map:any = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if(!map[char]){
            map[char] = true
            res.push(char)
        }

    }
    return res.join()
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
*/

// class
/*const animal = {
    name: 'Animal',
    age:5,
    hasTail: true
}*/
/*type animalType = {
    name: string,
    age: number,
    hasTail: boolean
}

class Animal {
    static type = 'ANIMAL'

    constructor(options: any) {
        //@ts-ignore
        this.name = options.name
        //@ts-ignore
        this.age = options.age
        //@ts-ignore
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am animal')
    }
}

const animal = new Animal({
    name: 'dog',
    age: 6,
    hasTail: true
})

console.log(animal)
animal.voice()
console.log(Animal.type)

class Cat extends Animal {
    static type = 'CAT'

    constructor(options: any) {
        super(options)
        //@ts-ignore
        this.color = options.color
    }
    voice() {
        super.voice()
        console.log('i am cat')}
    get ageInfo (){
        //@ts-ignore
        return this.age * 7
    }
    set ageInfo(newAge){
        //@ts-ignore
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'lok',
    age: 6,
    hasTail: true,
    color: 'white'
})
//@ts-ignore
console.log(cat.ageInfo)
cat.voice()
console.log(cat)
cat.ageInfo = 8
console.log(cat.ageInfo)*/


/*
class Component {
    constructor(selector:any) {
        //@ts-ignore
       this.$el = document.querySelector(selector)
    }
    hide(){
        //@ts-ignore
        this.$el.style.display = 'none'
    }
    show(){
        //@ts-ignore
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options:any) {
        super(options.selector)
        //@ts-ignore
        this.$el.style.width = this.$el.style.height = options.size + 'px'
    }

}
const  box1 = new Box({
    selector: '#box1',
    size:100,
    color: 'red'
})*/
