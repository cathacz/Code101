// ===== old life with no Objects =====

let firstName = "Catha";
let lastName = "Czipf";
let userAge = 33;

// =============================================================================================== Objects
// const <namespace> = {<key 1>: <value 1>, <key 2>: <value 2>, <key 3>: <value 3>}
// key names must be unique (string or number );

// way to declare object ------------------------------------------------------------------ object literal

const obj = {
  1: "Catha",
  2: "Resi",
  3: "Matthias",
};

const userObj = {
  name: "Konstantin",
  lastName: "Fischte",
  age: 33,
  add: "xxx str",
  act: ["gardening", "sleep", "read"],
  fat: false,
};
console.log(userObj.name); // > accessing Konstantin
console.log(typeof userObj); // > object
console.log(userObj.act[1]); // > sleep

// function in object = method

// ================================================================================= accessing properties
// > with bracket notation >>> obj[key]
console.log(userObj["name"]); // > Konstantin
console.log(userObj["act"][0]); // > gardening
// > with dot notation >>> obj.name
console.log(userObj.name); // > Konstantin
console.log(userObj.act[0]); // > gardening

const obj2 = {};
console.log(typeof obj2);
// fill up/ add to object
obj2.name = "Hans-Jörg"; // common way
obj2["age"] = 54;
console.log(obj2); // {name: "Hans-Jörg", age: 54}
// overwrite values (keys can't be renamed when value assigned)
obj2.age = 58;
console.log(obj2);

// declare stuff – fill up later
const save = new Object();
console.log(save); // > {}
const arr = new Array();
console.log(arr); // > []

// ======================================================================================= "cool" for-loop
// inside the for-loop use [ ] notation! (. notation won't work)
// props = variable (aka properties = key incl. value)
for (let props in userObj) {
  console.log(`${props}: ${userObj[props]}`);
}

const person = {
  name: "Catha",
  age: 33,
  birthYear: 1987,
  gender: "female",
  hight: 175,
  print: function () {
    console.log(
      `Hej, I am ${person.name}, I am born in ${this.birthYear} there for I am ${person.age} years old. I am a little too tall with ${person.hight}cm for a ${person.gender}`
    ); // this refers to object name
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};
person.print();
console.log(person.old());

// ------------------------------------------------------------------------------------------- Object.keys
// prints out all keys inside the object
console.log(Object.keys(person)); // ['name', 'age', ...]

// ----------------------------------------------------------------------------------------- Object.values
// prints out all values inside the object including all functions
console.log(Object.values(person)); // ['Catha', 33, ...] >> also the functions!

// ----------------------------------------------------------------------------------------- Object.assign
// combine multiple objects to one
const obj3 = {
  kids: 0,
  money: 6000,
};
const obj4 = { colors: ["black", "green", "pink"], pet: "dog" };
const totalObject = Object.assign({ name: "Catha" }, obj3, obj4);
console.log(totalObject);

// ----------------------------------------------------------------------------- Object.defineProperties()
const newPersonality = {};
Object.defineProperty(newPersonality, "bike", {
  value: "Hollandrad",
  writable: true, // user able to modify or not
});

console.log(newPersonality.bike);

// ----------------------------------------------------------------------------- Object.defineProperties()
Object.defineProperties(newPersonality, {
  p1: { value: "W", writable: false }, // writable is not defined: default is true
  p2: { value: "T", writable: false },
  p3: { value: "F", writable: false },
});
console.log(newPersonality.p1, newPersonality.p2, newPersonality.p3);

console.log("===== Small Assignments =====");

// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.
// Create a function that returns an array of the properties of a javascript object.

const person2 = {
  name: "Catha",
  age: 33,
  birthYear: 1987,
  gender: "female",
  hight: 175,
  act: ["gardening", "concerts", "beer"],
};
for (let props in person2) {
  console.log(`${props}: ${person2[props]}`);
}
const objPro = (obj) => {
  return Object.keys(obj);
};
console.log(objPro(person2));

// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${student.firstName} ${student.lastName} is a student in the class ${student.class}`
    );
  },
};
student.print();
//Create a method that prints the following: "Zain Oil a student in class 48"

// Get Values. Create a function that returns an array of all values of an object’s properties.
// Examples:
const beverages = { choice1: "tea", choice2: "coffee", choice3: "milk" };
const beverageChoice = (obj) => {
  return console.log(Object.values(obj));
};
beverageChoice(beverages); // Expected output:["tea", "coffee", "milk"]

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
let studentA = {
  name: "Mike",
  class: "4A",
  course: "English",
};
// Expected output:
// ["name", "class", "course"]

const studentStuff = (obj) => {
  // obj refers to object
  return console.log(Object.keys(obj));
};
studentStuff(studentA);

const objectToArray = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
//   Expected output:
//   [["cats", 1], ["dogs", 2], ["turtles", 4]]

// ===================================================================================== Object.entries()
function getKeysAndValues(obj) {
  return Object.entries(obj);
}

console.log(getKeysAndValues(objectToArray));

// ---------------------------------------------------------------------------------------------- delete

delete objectToArray.cats;
console.log(objectToArray);

// ==================================================================================== .hasOwnProperty()
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")); // should return "pony"

const objUserInfo = {
  userName: "Catha",
  age: 33,
};

console.log(objUserInfo.hasOwnProperty("add"));
console.log(objUserInfo.hasOwnProperty("age"));

// ======================================================================================== Object.seal()

Object.seal(objUserInfo);
objUserInfo.name = "Katja"; // didn't change name in Object
objUserInfo.add = "Leipzig"; // didn't add the address to Object // ============ there is a "freeze" too
delete objUserInfo.age; // didn't delete the age from the Object
console.log(objUserInfo);

// ================================================================ LOOPS ... Objects
// for in
// for of
