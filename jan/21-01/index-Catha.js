// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

const isPalindrome = (str) => {
  let wordToArr = str.toLowerCase().split("");
  //console.log(wordToArr);
  return str === wordToArr.reverse().join("");
};

console.log(isPalindrome("tarrattarrat"));
console.log(isPalindrome("penis"));

//====================================================================================================
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

// map is a loop and needs a function ------------------------------------------------------- .map()
// old way : for (let i = 0; i<= arr.length;i++) replacement is .map
const names = ["Konstantin", "Lieschen", "Matthias", "Resi"];
//           ArrayName
const newArr = names.map((name, indexnumer) => {
  if (name == "Matthias") {
    console.log("don't like you anymore");
  }
  console.log(`this ${name} has index ${indexnumer}`);
});

const cities = ["Berlin", "Paris"];
//                        city = currentValue, i = indexnumber (i = like array.length)
const newCity = cities.map((city, i) => console.log(city));

//.map = function inside of a method
// .map don't need a return if only 1 thing, later on needs a return

// ---------------------------------------------------------------------------------------- .reduce()
// collecting data
const numArr = [1, 3, 7, 9, 23, 56];
// accumulation = Ansammlung/Anhäufung
const reducer = numArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue // multiple tasks with {}; {} needs return
);
console.log(reducer);

const reducer2 = numArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  100 // add 100 to result
);
console.log(reducer2);

// ---------------------------------------------------------------------------------------------- break;
//breaking out of a loop:

/*
T
TT
TTT
TTTT
TTTTT
*/
let tBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      tBox += "T";
      console.log(tBox);
    }
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 4) {
    break;
  }
}

// ..............................................................................................continue;
//skipping an interaction
for (let i = 1; i <= 10; i++) {
  if (i == 4) {
    continue;
  } else {
    console.log(i);
  }
}
