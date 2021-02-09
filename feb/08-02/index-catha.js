// repeating Stuff once more

// { } need a return!
// true == 1 – false == 0
// = > assigning
// == > comparing
// === >

// array methods: map(), reduce(), filter(), find()
//reduce, map, filter, find DOES NOT effect original array

console.log("===== callbacks =====");
// -------------------------------------------------------------------------------------------- callbacks
// callbacks MUST be called – nested function can be called

function first(cb) {
  // "master" function calls cb function in order to work
  return cb;
}
function cb() {
  return "stuff";
}
// cb is a function as a parameter
console.log(first(cb()));

function nested() {
  const eggs = () => "7";
  return eggs();
}
console.log(nested());

console.log("===== map =====");
// --------------------------------------------------------------------------------------------------- map
// callback function – array method
// takes array, modifies it and brings back modified array
// modified copy of original array
// don't use map to loop

const names = ["Catha", "Konstantin", "Matthias"];
// item = every item of array and index = index number of that item
const hejNames = names.map(
  (item, index) => `Hej ${item}, your index is ${index}`
);
console.log(hejNames);
console.log(names); // still the same

console.log("===== reduce =====");
// ------------------------------------------------------------------------------------------------ reduce

const numberArray = [2, 3, 4, 6, 9, 13];

const totalSum = numberArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 //starter for accumulator (it's a basket)
);
//start with 1 when multiplications
//start with 0
// can also use objects and array here
console.log(totalSum); // = 37

const reducer = (acc, cur) => acc + cur;
const totalArray = numberArray.reduce;

console.log("===== filter =====");
// ------------------------------------------------------------------------------------------------ filter
// new array with items that pass filtering

const filterArray = names.filter((name) => name.length > 7);
console.log(filterArray); // ['Konstantin', 'Matthias']
// if no value fits condition, it returns an empty array
console.log("===== find =====");
// -------------------------------------------------------------------------------------------------- find
// comes back with the first true value

const findName = names.find((name) => name.length > 7);
console.log(findName); // Konstantin > returns only Konstantin because he is the first item in the array
// if return is undefined – no value there that fits to condition

console.log("===== fill =====");
// -------------------------------------------------------------------------------------------------- fill
// needs 3 arguments (what, from where, to where)
// modifying the original array
const moreNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18];
moreNumbers.fill(3, 2, 5);
console.log(moreNumbers);

console.log("===== some =====");
// -------------------------------------------------------------------------------------------------- some
// call back function
// returns true if only 1 item fits the condition
const isEvan = (item) => item % 2 == 0;
console.log(moreNumbers.some(isEvan)); // true

console.log("===== every =====");
// ------------------------------------------------------------------------------------------------- every
// all items has to fit condition in order to come back as true
const isBigger = (item) => item > 17;
console.log(moreNumbers.every(isBigger)); // false because of 18 is bigger than 17

console.log("===== sort =====");
// -------------------------------------------------------------------------------------------------- sort
// basic usage with UTF-16:
const alpha = ["a", "c", "b", "!", "ü", 8, 1];
console.log(alpha.sort());

const words = ["hej", "hello", "hi", "ciao", "hola"];
// needs "a" and "b" to compare ( a = 1, b = 2)
const sorted = words.sort((a, b) => a.length - b.length); // hi, hej, ciao, hola, hello
// b.length - a.length >> longest word first (hello, ciao, hola, ...)
// < > instead of - is possible but in order to sort properly use minus
console.log(sorted);
console.log(words.sort());

console.log("===== for in =====");
// ------------------------------------------------------------------------------------------------ for in

const person = {
  userName: "Catha", // if key got a space always use " "
  age: 33,
  city: "Leipzig",
};
for (prop in person) {
  console.log(`${prop}: ${person[prop]}`); // .this doesn't work cuz no object to refer to – use in object
}

console.log("===== for of =====");
// ------------------------------------------------------------------------------------------------ for of

const objArr = [
  { name: "Catha", age: 33, gender: "female" },
  { name: "Resi", age: 34, gender: "female" },
  { name: "Matthias", age: 48, gender: "male" },
];

const favBooks = [
  { title: "Little Mermaid" },
  { title: "Snowwhite" },
  { title: "Der kleine Besserwisser" },
];
for (let prop in favBooks) {
  console.log("hej " + prop);
}

for (let prop of objArr) {
  console.log("hej " + prop.name);
}
const [name] = objArr;
console.log(name);

// ======================================== conditions ===================================================

// == comparing value between 2 items
// === comparing value and type
// != not equal
// <= smaller and/or equal

let condition1 = 1 < 23; // true
console.log(condition1);
let condition2 = 1 == 23; // false
console.log(condition2);
let condition3 = 1 <= 23; // true
console.log(condition3);
if (condition1 && condition3) {
  console.log("super true");
} else {
  console.log("not true");
}

// true && true = true
// true && false = false
// false && false = false

// true || true = true
// true || false = true
// false || false = false

// loop

const a = [76, 02, 63];
for (let i = 0; i <= 5; i++) {
  console.log("*".repeat(i));
}

let box; // box is ready
for (let i = 0; i <= 5; i++) {
  box = ""; // box is empty now
  for (let j = 0; j < i; j++) {
    box += "+"; // box=
  }
  console.log(box);
}
