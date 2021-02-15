console.log("===== Functions =====");
// ====================================================================================== ternary operator
// ( = bedingter Operator) >> ? _ : _

//                truthy : falsy
console.log(true ? "yay" : "nay"); // >> yay
console.log(176 > 987 ? "yay" : "nay"); // >> nay
console.log(136 == 987 ? 1 : 0); // >> 0
// ======================================================================================= if (){} else {}
// if >> condition statement

if (1 == 22) {
  // ||(or) >>> &&(and)
  console.log("yay");
  //} else {console.log("nay");
}
console.log("totally ignoring the 'else' part"); // works without "else"

// ============================================================================================ function
//           arguments (num1, num2)
function fun(num1, num2) {
  // old skool way to declare a function
  let numSum = num1 * num2;
  return numSum;
} //            parameters ( 3, 9)
console.log(fun(3, 9)); // >> 27
//btw NaN means "Not a Number"

//synchronous request is running line by line

// we need: [] {} () <> ; : , . - _ / \ ! ? @ % $
console.log(`😋`);

// ======================================================================================== ES6 function
//never declare a function with let or var ALWAYS use const (can't be changed, can't get lost)
const functionName = () => {
  //new way to write a function
  return `an ES6 function`;
};
console.log(functionName()); // >> an ES6 function

// ____________________________________________________________________________________new way to function

//old school function
function display(str) {
  console.log(str);
}
// ES6 style function (arrow function)
//const functionName= (parameters) => {...}
const print = (str) => {
  console.log(str);
};
//function assigned to a variable
// const functionname = function(parameters){...}
const sum = function (x, y) {
  return x + y;
};

//Invoke the function (call the function)
sum(3, 4);

//call stack (start with one step and work step by step)
//nested function (= function declared inside another function)
//stack (= function calls function which is declared on global scope)
const logIn = () => {
  //some code
  halloUser();
  // some more code
};

const halloUser = () => {
  return `hej you, looking good 2day`;
};
//with calling the logIn function all function that live within needs to be executed before origin function (logIn) can finish >> inner function needs to finish so outer function can finish
logIn();
//asynchronous thingie (java is synchronous) cause jumping around

//declare this way cause the logIn Call is before function
function logIn2() {
  halloUser();
}
//better declare inner function separately – can be used in different places
function halloUser2() {
  return `hej you, looking good 2day`;
}
