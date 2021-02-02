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

// ============================================================================================ "cool" for
// loopü
// props = variable (aka properties)
for (let props in userObj) {
  console.log(`${props}: ${userObj[props]}`);
}
