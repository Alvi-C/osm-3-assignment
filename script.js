// 1
function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
    } else {
        for (let prop in obj) {
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

const sampleObject = { name: "John", age: 30, city: "New York" };
printObjectProperties(sampleObject);

// 2
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));

// 3
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

// 4
const calculateSquare = (number) => number * number;

console.log(calculateSquare(5));

// 5
function doubleNumbers(numbers) {
    return numbers.map((num) => num * 2);
}

const numbers = [4, 2, 23, 43, 51];
console.log(doubleNumbers(numbers));

// 6
class MathUtility {
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtility.multiply(6, 2));

// 7
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    fetch() {
        console.log("Fetching the ball!");
    }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound();

// 8
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
}

const person1 = new Person("Rubel", 30);
person1.introduce();

