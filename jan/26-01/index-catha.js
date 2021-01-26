//parameters: Naming and order

const userPrint = (name, add, age) => {
  console.log(
    `Hej ${name}, is your address in ${add} and are you ${age} years old?`
  );
};
userPrint("Matthias", "Leipzig", 48);

// ----------------------------------------------------------------------------------------- default value

const hejUser = (userName = "I ask for your stupig name!") => {
  console.log(`Hej ${userName}`);
};
hejUser("Matthias");
hejUser();

// ------------------------------------------------------------------------------------- spread syntax ...
// shallow copy of an array

const arr = ["Hej", "I", "you"];
const cloneArr = [...arr];

cloneArr[0] = "hello";
console.log(arr);
console.log(cloneArr);

const arr1 = ["add", "stuff"];
const cloneArr1 = ["you can", ...arr1, "in front", "and back"];

console.log(arr1);
console.log(cloneArr1);

// -------------------------------------.--------------------------------------------------------- ...args

const summ = (x, y, z, s, u) => x + y + z + s + u; // => { return x + y};
console.log(summ(2, 6, 7, 4, 1)); //>20
//                                  args = arguments (can be named anything)
const printFunThingsToDo = (usNa, ...args) => {
  console.log(args);
  console.log(
    `Hej ${usNa} so you like ${args[(0, args.length - 2)]}, and ${
      args[args.length - 1]
    }?`
  );
};
console.log(
  printFunThingsToDo(
    "Catha",
    "photography",
    "painting",
    "DIY-Stuff",
    "gardening"
  )
);
// -------------------------------------------------------------------------------------- "cool" functions
//                       NO {} if only one thing to execute
const printingMyName = () => console.log("Catha");
printingMyName();

//function executes itself – needs old-skool function
(function sayMyName(cat, x, y) {
  console.log(`${cat}'s lucky ${x + y}`);
})("Catha", 3, 4);

// -------------------------------------------------------------------------------------------------- .map

// ------------------------------------------------------------------------Array.prototype.map(<function>)

// ===== assignment stuff ======

console.log("===== Ass1 =====");
// Write a function that it returns  “Two for me and one for you” when no arguments are passed

const twofer = (us = "you") => {
  return `Two for me and one for ${us}`;
};
// e.g
console.log(twofer("Fran")); // ---> "Two for me and one for Fran"
console.log(twofer()); // ---> "Two for me and one for you"

console.log("===== Ass2 =====");
// Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.

const exponent = (x, y = 2) => {
  return x ** y;
};
// e.g
console.log(exponent(3, 3)); // ---> 27
console.log(exponent(3)); // ---> 9

console.log("===== Ass3 =====");
// Write a function that it returns the total amount of arguments passed to it.

const howManyArgs = (...args) => {
  return args.length;
};
// e.g
console.log(howManyArgs()); // ---> 0
console.log(howManyArgs(1, false, "hello")); // ---> 3
console.log(howManyArgs("better")); // ---> 1

console.log("===== Ass4 =====");
// Write a function which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};
// e.g
console.log(sum(1)); // ---> 1
console.log(sum(1, 15)); // ---> 16
console.log(sum(25, 25, 20)); // ---> 70

console.log("===== Ass5 =====");
// Bonus: Write a function which accepts any amount of numbers and returns the average.

const average = (...args) => {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result / args.length;
};
// e.g
console.log(average(0)); // ---> 0
console.log(average(1, 2)); // ---> 1.5
console.log(average(1, 3, 6, 10)); // ---> 5
console.log(average(12, 14, 16)); // ---> 14
