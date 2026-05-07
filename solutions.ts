//p-1
function filterEvenNumbers(params: number[]): number[] {
  const EvenNumbersArr = params.filter((param: number) => param % 2 === 0);

  return EvenNumbersArr;
}

const EvenNumbersArr = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// p-2
function reverseString(params: string) {
  const reverse = params.split("").reverse().join("");
  return reverse;
}
const reverseStr = reverseString("typescript");

//p-3
type StringOrNumber = string | number;
function checkType(types: StringOrNumber) {
  if (typeof types === "string") {
    return "String";
  } else if (typeof types == "number") {
    return "Number";
  }
}
const check = checkType("Hello");

// p-4
function getProperty<T>(obj: T, key: keyof T) {
  if (typeof obj[key] === "string") {
    return `"${obj[key]}"`;
  }
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
const property1 = getProperty(user, "name");

// p-5
interface Book {
  title: string;
  author: string;
  publishYear: string;
}

function toggleReadStatus<T>(obj: T) {
  return {
    ...obj,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const toggle = toggleReadStatus(myBook);

// p-6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}
const student = new Student("Alice", 20, "A");

// p-7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const newArray = arr1.filter((arr) => arr2.includes(arr));
  return newArray;
}
const intersection = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
