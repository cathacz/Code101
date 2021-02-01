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

// ======================================== every function need a return!!

// nested Scopes: accessing outer global variables

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

// closure

let nr = 10;
function fum() {
  return nr + nr;
}
console.log(fum());
nr = 20;
console.log(fum());

// invoking = calling
// functions that return other function

//const secureFunction = (() => {}) >>> outer () secures function
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

// SIAF = self-invoking anonymous function
// IIFE = immediately-invoked function Expression
