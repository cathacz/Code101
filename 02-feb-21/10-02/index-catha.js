const car = {
  brandName: "Ford",
  modelYear: "1976",
  priceWithVAT: 50,
  colors: ["midnight black", "hot pink", "forest green"],
};

// Shallow clone for an object ------------------------------------------------------------- shallow copy
// shallow copy doesn't work on complex structured objects
//                  ... copies all stuff inside the Object
const newCloneObj = { ...car }; //cloning NOT referring
console.log(newCloneObj);
newCloneObj.brandName = "BMW";
// array "colors" is just a reference – will be changed in original with a shallow copy
newCloneObj.colors[2] = "deep sea blue";
console.log(newCloneObj);
console.log(car);
console.log("-----");
// const assignedObj = Object.assign(car);
// console.log(assignedObj);
// assignedObj.modelYear = "2020";
// console.log(assignedObj);
// console.log(car);

// Recursion (doing the loop without the loop) faster than normal loop
// recursion calls function by itself
// recursion = "zrücklaufend"
// factorial example (like a countdown)
const factorial = (num) => {
  console.log(num);
  if (num == 1) {
    // if statement is needed
    return 1; // safety exit
  }
  return num * factorial(num - 1); // goes like a loop through all the numbers till it reaches one
  //          calling itself
};

console.log(factorial(7)); // 7*6 = *5 = *4 = *3 =*2 =*1

// deep copy using recursion

function deepCopy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCopy(obj[key]) })) // creates many objects
      .reduce((acc, cur) => Object.assign(acc, cur), {}); // reduces objects into one object
  } else if (typeof obj == "array") {
    return obj.map(deepCopy); // pass arrays in objects into the new object
  }
  return obj;
}

const brandNewCopy = deepCopy(car);
console.log(brandNewCopy);
brandNewCopy.colors[2] = "orange";
console.log(brandNewCopy);
console.log(car);

const brandNewCloned = deepCopy([{ name: "Hadi" }, { name: "Zain" }]);
console.log(brandNewCloned);

console.log("===== assignment =====");
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
const score = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const scrabble = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
};
console.log(scrabble(score)); //>28

// 2. Get Values. Create a function that returns an array of all values of an object's properties.
function getObjectValues(obj) {
  return Object.values(obj);
}
// Examples:
console.log(
  getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  })
);
// Expected output:
// ["tea", "coffee", "milk"]

// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.

// Example
let person = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
};

person.print = function () {
  return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`;
};
console.log(person.print());
// Example of Expected Output "Michael Smith is a 20 year old driver in Paris".

// Bonus Questions

// 1. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
const objectToArray = {
  A: 1,
  B: 2,
  C: 3,
};
const keyAndVal = (obj) => {
  return Object.entries(obj);
};

console.log(keyAndVal(objectToArray));
// Examples:

// Expected output:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// Expected output:
// [["cats", 1], ["dogs", 2], ["turtles", 4]]
// 2. List Properties. Create a function that returns an array of properties of a javascript object.

// Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
// ["name", "class", "course"]
// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.

// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.

// Example:
let pers = {
  name: "John",
  job: "teacher",
};

const switchKey2Val = function (obj) {
  let newObj = {};
  for (let prop in obj) {
    newObj[obj[prop]] = prop;
  }

  return newObj;
};

console.log(switchKey2Val(pers));
// Expected Output:
// {"John": name, "teacher": job}

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

const returner = (obj) => {
  const keyArr = Object.keys(obj);
  const valArr = Object.values(obj);
  return [keyArr, valArr];
};

// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]

console.log(returner({ a: 1, b: 2, c: 3 }));
