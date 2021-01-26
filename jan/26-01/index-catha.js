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
// converting an array to a different array: Array.prototype.map(<function>)
// want same array but modified

const book = ["Bio of a man", "This sucks", "The secret"];
//                  currentValue, indexNumber
const printBook = book.map((item, index) => `${index}. titel: ${item}`); //function in .map > nameless fct
console.log(book); // book stays the same
console.log(printBook);

const nummern = ["1", "2", "3"].map((item) => parseInt(item));
console.log(nummern);

const printMany = [1, 2, 3, 4, 5].map((item) =>
  console.log(item, "Catha fetzt")
);

// ----------------------------------------------------------------------------------------------- .reduce
// getting a in single output value

//          accumulator , currentValue (= item)
const reducer = (acc, cur) => acc + cur;
const resultArr = [2, 3, 1, 3].reduce(reducer); // > = 9
console.log(resultArr);

// ----------------------------------------------------------------------------------------------- .filter
// getting an array with items that aline with your condition: Array.prototype.filter(<function>)
// filter always with array!

const naems = ["Matthias", "Hans-Jörg", "Konstantin", "Catharina"];
const filArr = naems.filter((naem) => naem.length == 9);
console.log(filArr); // Hans-Jörg, Catharina

// ------------------------------------------------------------------------------------------------- .find
// getting a the first item that aline with your condition: Array.prototype.find(<function>)
// find always comes back with single value

const nUm = [1, 2, 34, 5, 6, 7];
const biggerThan5 = nUm.find((nombre) => nombre > 5);
console.log(biggerThan5); // > 34 – cuz it's the first true item, doesn't bother the others

console.log("===== morning assignment stuff ======");
console.log("                                     ");

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

// WWHD – one line functions are the best
const sum2 = (...args) => {
  //                            { return acc +cur} >>> return alway once in ONE function
  return args.reduce((acc, cur) => acc + cur);
};

console.log(sum2(1)); // ---> 1
console.log(sum2(1, 15)); // ---> 16
console.log(sum2(25, 25, 20)); // ---> 70

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

console.log("===== toCamelCase =====");
const toCamelCase = (str) => {
  let strToArr = str.split("_");
  let result = strToArr.map((item, i) =>
    1 > i ? item : item[0].toUpperCase() + item.slice(1)
  );
  return result.join("");
};
console.log(toCamelCase("some_stuff_here"));

console.log("===== afternoon assignment stuff ======");
console.log("                                       ");
console.log("===== hackerSpeak =====");
// hackerSpeak
const hackerSpeak = (str) => {
  // WWHD
  return str
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "e":
          return "3";
        case "i":
          return "1";
        case "o":
          return "0";
        case "s":
          return "5";
        default:
          return chr;
      }
    })
    .join("");
};

console.log(hackerSpeak("This is NO fun at all!"));
console.log("===== Odds & Even =====");
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
// const oddEven = (arr) => {
//   let result = arr.map((item, i) => (i % 2 == 0 ? item - 1 : item + 1));
//   return result;
// };
//Examples:
// console.log(oddEven(3, 5, 2, 4)); // ➞ expected output: [4, 6, 1, 3]
// console.log(oddEven(6, 9, 10, 20)); // ➞ expected output: [5, 10, 9, 19]

const oddEven2 = (...args) => {
  return args.map((item) => (item % 2 == 0 ? ++item : --item));
};
console.log(oddEven2([3, 5, 2, 4])); // ➞ expected output: [4, 6, 1, 3]
console.log(oddEven2([6, 9, 10, 20])); // ➞ expected output: [5, 10, 9, 19]

console.log("===== howManyStr =====");
// how many chr in a str(not case sens)

const howManyStr = (str, char) => {
  return str
    .toLowerCase()
    .split("")
    .filter((item) => item == char).length;
};
console.log(howManyStr("I like pizza", "p")); // -> 1
console.log(howManyStr("I like pizza", "i")); // -> 3
