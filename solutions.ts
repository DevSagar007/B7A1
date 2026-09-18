// Problem one 
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((number) => number % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem two
function reverseString(value: string): string {
    return value.split("").reverse().join("");
}
console.log(reverseString("typescript"));

// Problem three
type typeStatus = string | number;
function checkType(value: typeStatus): "string" | "number" {
    if (typeof value === "string") {
        return "string"
    }
    else {
        return "number"
    }
}
console.log(checkType("hello"), checkType(10));

// Problem four
function getProperty<T, k extends keyof T>(object: T, key: k): T[k] {
    return object[key]
}
const user = {
    id: 1,
    name: "john Doe",
    age: 21,
};
console.log(getProperty(user, "name"), getProperty(user, "age"));

// Problem five 
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true,
    }
}
const myBook = {
    title: "The Horror World",
    author: "Afnan Bhai",
    publishedYear: 2024
}
console.log(toggleReadStatus(myBook));

// Problem seven
class Person {
    name : string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name:string, age:number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("dev", 20, "A");

console.log(student.getDetails());;