console.log("===== Conditional Algorithms =====");
console.log("1. Los or New?");

// * Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.
function nameOfCity(cityName) {
  const first3char = cityName.substring(0, 3).toLowerCase();
  if (first3char == "new" || first3char == "los") {
    return cityName;
  } else {
    return "The city name does not begin with Los or New";
  }
}
console.log(nameOfCity("New York"));
console.log(nameOfCity("Boston"));

console.log("2. isDivisible?");

// * Create a function named "__". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

const isDivisible = (num) => num % 100 == 0;
console.log(isDivisible(1));
console.log(isDivisible(1000));

console.log("4. What's the weather?");

// * Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "__". If false, print "__".

const isRaining = (bool) =>
  bool
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
console.log(isRaining(true));
console.log(isRaining(false));

console.log("===== Loops =====");
console.log("1. Sequence");

// * Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

const geometricalSequence = () => {
  let str = "";
  for (let i = 1; i <= 256; ) {
    if (i == 1) {
      str += i;
      i += i;
      continue;
    }
    str += `${i} `;
    i += i;
  }
  return str;
};
console.log(geometricalSequence());

console.log("2. Multiples");

// * Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

console.log("===== Math =====");
console.log("1. You've got the power");

// * Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.

//     > **Examples**:
//     - ```javascript
//         powerOf(3) //27
//         ```

//     - ```javascript
//         powerOf(4) //256
//         ```
console.log("===== Problem Solving =====");
console.log("1. How many?");

// * Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
//     > **Examples**:
//     - ```javascript
//       vowelCount("hello") // 2
//       ```
//     - ```javascript
//       vowelCount("test") // 1
//       ```
//     - ```javascript
//       vowelCount("fbw") // 0
//       ```

console.log("===== Objects =====");
// declaring objects
const obj1 = {};
obj1["name"] = "Catha";
console.log(obj1);
const obj2 = {
  userName: "Matthias",
};
console.log(obj2);
const obj3 = new Object();
const person = {
  userName: "Resi",
  age: 34,
  add: "Salzburg",
};
// Object.entries() >>> Array of arrays with the [keys, values] of Object >>> makes array of Object
console.log(Object.entries(person));

const arrOFarr = [
  [33, 2],
  [94, 02],
  [17, 98],
  [93, 7],
];
console.log(arrOFarr[2][1]); // > 98

const arrOFobj = [
  { firstName: "Matthias", lastName: "Thi" },
  { firstName: "Resi", lastName: "Rocki" },
  { firstName: "Catha", lastName: "Czipf" },
  {
    printOut: function () {
      console.log("Hej");
    },
  },
];
arrOFobj[3].printOut();
//alternative:
arrOFobj[3]["printOut"]();

// Object.assign >>> combine objects
// reference is only with array && objects

// primitive >>> coping(cloning) values from one object to another (simple value: integer, strings, booleans)
let x = 3;
let z = x;
let strLong = "What's up, buttercup?";
let cloneStr = strLong; // just a clone cuz it's a primitive
cloneStr = "Not much";
console.log(strLong);
console.log(cloneStr);

// Object
const car = {
  name: "Mustang",
  year: "1976",
  color: "black",
};

let newCar = car; // reference

newCar.name = "BMW"; // overwriting! Mustang >> BMW
console.log(car);

//shallow copy for simple Object (only keys with values)

const names = ["Konstantin", "Matthias", "Lieschen", "Resi"];
const namesClone = [...names]; //cloning --------------------------------------- way 1
namesClone[0] = "Sarah";
console.log(namesClone);
console.log(names); //stays the same

const newCloneArr = [].concat(names); // ---------------------------------------------- way 2
newCloneArr[1] = "Pia";
console.log(newCloneArr);

const newCloneArr2 = [].concat(names, 12, 47, "Lucy"); // adding more stuff
console.log(newCloneArr2);

const lastWay = names.slice(0); // shallow copy ------------------------------------------way 3

// afternoon assignments
// ===== ASS 1 =====
// Convert keys and values into an array. Create a function that converts an object into an array of keys and values.

// Examples:
let objectToArray = {
  A: 1,
  B: 2,
  C: 3,
};
console.log(Object.entries(objectToArray)); //>>[["A", 1], ["B", 2], ["C", 3]]
let objectToArray2 = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
console.log(Object.entries(objectToArray2)); //>>[["cats", 1], ["dogs", 2], ["turtles", 4]]

// ===== ASS 2 =====

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};

console.log(Object.keys(student)); //>>["name", "class", "course"]

// ===== ASS 3 =====
// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
let first = { firstName: "John" };
let last = { lastName: "Smith" };

let merged = Object.assign(first, last);
console.log(merged);
// Expected output:
// {firstName: "John", lastName: "Smith"}
