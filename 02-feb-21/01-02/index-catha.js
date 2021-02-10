// === let, var, const vs global ===

// global { local }

// function inside a function
function main(num1, num2) {
  // outer function
  function second(n) {
    return n * n;
    // inner function
  }
  //    (3*3)= 9 + (4*4)= 16      = 25
  return second(num1) + second(num2);
  // outer function calls inner function
}

console.log(main(3, 4)); // > 25

// ======================================== every function need a return!! ===============================

// nested Scopes: accessing outer global variables ========================================= nested Scopes

let nice = true; // global variable
const outerFunction = (x, y) => {
  let big = true; // local Variable
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = false;
    nice = false;
    console.log(big + " innerFunction");
    return num + 10;
  };
  //          (3+10) = 13 + (4+10)= 14
  return innerFunction(x) + innerFunction(y);
  // prints (big + "innerFunction") 2 times cuz it calls it 2 times

  // cannot access in inner function declared variables from here
};
console.log(outerFunction(3, 4)); // > 27
// cannot access local variable here

// =============================================================================================== closure

let nr = 10;
function fum() {
  return nr + nr;
}
console.log(fum());
nr = 20;
console.log(fum());

// invoking = calling
// functions that return other function

//const secureFunction = (() => {}) >>> outer () secures the function
const secureFunction = (() => {
  let counter = 0;
  return () => {
    // anonymous function
    counter++;
    return counter;
  };
})(); // the empty () means the function invokes itself

console.log(secureFunction()); // > 1
console.log(secureFunction()); // > 2
// === SIAF = self-invoking anonymous function ====================================================== SIAF
// (function(){})(); oder (()=>{});
(function () {
  console.log("Catha fetzt");
})();

// === IIFE = immediately-invoked function Expression =============================================== IIFE

const summmmm = ((x, y) => {
  return x + y;
})(3, 4);
console.log(summmmm); // > 7

// write a function plus that uses a closure that performs addition on arguments in 2 separate function calls.
const plus = (a) => {
  return (b) => {
    return a + b;
  };
};

// execute outer function(5) and then outer function(4)
// outer function call can be empty (if it is in function) but inner function must be called
console.log(plus(5)(4)); // > 9

// write a function multi that uses a closure that performs multiplication. However, the outer function should be stored in a variable which is then called.

function multi(num) {
  return (x) => x * num;
}
const times = multi(2)(5);
console.log(times);

console.log("===== Assignments =====");
// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000

function retirementSavings(age, retireAge, salary, percentage) {
  let result;
  let yearsLeft = retireAge - age;
  let yearlySaving = (salary * percentage) / 100;
  //console.log(yearlySaving);
  //console.log(yearsLeft);
  if (yearsLeft <= 0) {
    return `You’re already retired!`;
  } else {
    return `your savings will be ${yearsLeft * yearlySaving}`;
  }
}
console.log(retirementSavings(40, 65, 2000, 5));
console.log(retirementSavings(67, 65, 2000, 5));

((age, retireAge, salary, percentage) => {
  if (age >= retireAge) {
    console.log(`You’re already retired!`);
  } else {
    let yearsLeft = retireAge - age;
    let monthsLeft = yearsLeft * 12;
    let monthlySaving = (salary * percentage) / 100;
    let totalSave = monthlySaving * monthsLeft;
    console.log(`you will save ${totalSave}`);
  }
})(40, 65, 2000, 5);

// if ... else Conditions
let fat = true;
if (fat) {
  console.log(`Stop eating`);
}
// ternary Operator
fat ? console.log(`no I ike food`) : console.log(`I need less food`);

// nested ifs  – rethink 3rd if!

// takes empty strings from the beginning and end ================================================= trim()
let ftr = "    Catha fetzt!        ";
console.log(ftr.trim());
// ============================================================================================= trimEnd()
console.log(ftr.trimEnd());
// =========================================================================================== trimStart()
console.log(ftr.trimStart());

// ========================================================================================== startsWith()
let txt = `This start with "this"!`;

console.log(txt.startsWith("Hej"));
console.log(txt.startsWith("This")); //case-sensitive
// ============================================================================================ endsWith()
console.log(txt.endsWith("Hej"));
console.log(txt.endsWith("!"));

// ============================================================================================== charAt()
let che = "hello World";
console.log(che.charAt(6)); // same as: (but only ONE character)
console.log(che[6]);

const awr = ["Catha", "Resi"];
console.log(awr[1][3]); // > i
console.log(awr[0].slice(1, 4)); // same as:
console.log(awr[0][1] + awr[0][2] + awr[0][3]); // > ath
// ========================================================================================== charCodeAt()
// Will return integer between 0 and 65535 that replaces UTF-16 code
// common character codes UTF-16, UTF-8, ASCII and A 00001111
// UTF-16 got it all (chinese, japanese, russian etc characters)
// ASCII = American Standard Code for Information Interchange
let a = "a";
console.log(a.charCodeAt(0)); // - 96 to translate to latin alphabeth
