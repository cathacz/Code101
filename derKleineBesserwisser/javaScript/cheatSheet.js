console.log("===== superAwesomeCheatSheet =====");
//declare variables: let, const, var
let x = 23; // can be changed later on, not hoisted
const y = 76; // cannot be changed , stays
var z = 91; // global variable (old skool) = let but var ist hoisted, let not hoisted
//hoisting --- read that

// ----------------------------------------------------------------------------------------------- string
let str = "This is a string"; //

//bracket notions: [] grab letter from string;
console.log(str[8]);

//escaping spatial characters (\n , \' , \") >> start new line
let newLine = "first line \n second line";
console.log(newLine);

// ----------------------------------------------------------------------------------------------- numbers
//numbers --- all the basic math + - / * (not a function it is a method)
let o = 5;
let p = 7;
console.log(o * p); // 5 * 7 = 35

let rechnung = o * p + 5;
console.log(rechnung);

// ----------------------------------------------------------------------------------------- float numbers
let float = 22.45;
console.log(typeof float); // tells you number

// console(OBJECT).log(METHOD)(something(DEPENDS))

//boolean (Wahrheitswert (true/false)) ----------------------------------------------------------- boolean
let bool = true;
console.log(bool);
let check = 12 < 72;
console.log("check: ", check);
// typeof = small function that tells what type a variable or stuff is like

// ------------------------------------------------------------------------------------------- conditions;
// = (assigning value to variable)
// == (equal [type doesn't matter])
// === (comparing value and type, both must fit)
// !== (not equal)
let q = true;
console.log(!q); // ---------------------- ! makes false true & true false
// >= (bigger or equal)
// <= (smaller or equal)
// > (bigger)
// < (smaller)

// ternary Operator (bedingter Operator) --------------------------------------------------------- ? _ : _
//                truthy : falsy
console.log(true ? "yay" : "nay");
console.log(176 > 987 ? "yay" : "nay");
console.log(136 == 987 ? 1 : 0);

// Math.stuff: Js methods from Math(.max, .min, .random, .floor, .ceil) ----------------------- Math.stuff

console.log(Math.max(1, 6, 93, 826, 1747)); // picks max
console.log(Math.min(1, 6, 93, 826, 1747)); // picks min
console.log(Math.floor(float));
console.log(Math.ceil(float));
console.log(Math.random()); //creates number between 0 and 1
console.log(Math.floor(Math.random() * 6) + 1); // imagine a Dice

// ------------------------------------------------------------------------------------------------- grab
// grab random character from string
let grab = "Grab a random character from this string.";
let randomGrab = Math.floor(Math.random() * grab.length); // creates random number within string "grab"
console.log(grab[randomGrab]); // grabs character from string "grab" with random generated position (number) with "randomGrab"

// JS methods for str (.trim, .length, .includes, .split, .toUpperCase, .toLowerCase) ---------- str-stuff
let cat = " Catha   ";
console.log(cat.length); // .length >> gives you "human" count answer incl. empty spaces
console.log(cat.trim()); // .trim >> removes empty spaces before and after stuff in string NOT between words
console.log(cat.trim().length); // first trim than count >> combined methods
console.log(cat.toLocaleUpperCase()); // all to upper cases

// --------------------------------------------------------------------------------------------- .includes
console.log(cat.includes("C")); // true >> "C" is included in string

// ------------------------------------------------------------------------------------------------ .split
console.log(cat.split(" "));

// ---------------------------------------------------------------------------------------------------- if
// if >> condition statement

if (1 == 22) {
  // ||(or) >>> &&(and)
  console.log("yay");
  //} else {console.log("nay");
}
console.log("totally ignoring the 'else' part"); // works without "else"

// ---------------------------------------------------------------------------------------------- function
//           arguments (num1, num2)
function fun(num1, num2) {
  // old skool way to declare a function
  let numSum = num1 * num2;
  return numSum;
} //            parameters ( 3, 9)
console.log(fun(3, 9)); //btw NaN means "Not a Number"

//synchronous request is running line by line

// we need: [] {} () <> ; : , . - _ / \ ! ? @ % $
console.log(`😋`); // smilies don't work

// ------------------------------------------------------------------------------------------ Es6 function
//never declare a function with let or var ALWAYS use const (can't be changed, can't get lost)
const functionName = () => {
  //new way to write a function
  return `an As6 function`;
};
console.log(functionName());
// ------------------------------------------------------------------------------------------------- array
//array >> !! alway [] !!
//              0        1          2
const arr = ["Catha", "Matthias", "Konstantin"];
console.log(arr[2]);
let arrNum = 1;
console.log(arr[arrNum]);
arrNum++; //adds 1 to arrNum
console.log(arr[arrNum]);

const NumArray = [19, 84, 20, 16, 39, 932, 198, 2, 23, 8373, 71];
console.log(NumArray[NumArray.length - 1]);

// ---------------------------------------------------------------------------------------------- for-loop

for (let i = 0; i <= 5; i++) {
  //declare i (let i = 0) just in this loop
  // increment part (i++) happens always in the end >> after console.log
  console.log(i);
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 5; i++) {
  if (i <= 1) {
    console.log(`there is ${i} star in the night sky`);
  } else {
    console.log(`there are ${i} stars in the night sky`);
  }
  if (i % 2 == 0) {
    console.log(`twinkle, twinkle little star`);
  }
}
console.log(`----------------------------------- next loop`);

for (let i = 5; i > 0; i--) {
  console.log(`${i} is a number`);
}
console.log(`----------------------------------- next loop`);

for (let i = 1; i <= 10; i++) {
  console.log(`this is a multiplication table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${j} * ${i}= ${i * j}`);
  }
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is an EVEN number`);
  }
  /* else {
    console.log(`${i} is an ODD number`);
  }*/
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(`${i} is an ODD number`);
  }
}

console.log(`----------------------------------- next loop`);
let draw = "";
for (let i = 0; i <= 4; i++) {
  draw = "";
  for (let j = 0; j <= i; j++) {
    draw += " +";
  }
  console.log(draw);
}
console.log(" +".repeat(6));
for (let i = 0; i <= 4; i++) {
  draw = "";
  for (let j = 5; j > i; j--) {
    draw += " +";
  }
  console.log(draw);
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 5; i++) {
  draw = "";
  if (i < 5) {
    for (let j = 0; j <= i; j++) {
      draw += " *";
    }
    if ((i = 5)) {
      draw = draw.repeat(6);
    }
  }
  console.log(draw);
}

//"return" (is for functions) in loops is a way to exit – better use >break<

//something else...  I guess Arrays

const nam = ["Catha", "Konstantin", "Matthias"];
const work = [" a WebDeveloper", "looking for Work", "a writer"];
for (let i = 0; i < nam.length; i++) {
  console.log(`Hej I am ${nam[i]} and I am ${work[i]}`);
}

const img = ["img1", "img2", "img3"];
const likes = [36, 822, 123];

for (let i = 0; i < img.length; i++) {
  console.log(`
    ===============
       ${img[i]}             
       ❤ ${likes[i]}         
    ===============
    `);
}

// console.log ("check: ", check) (check1 + check2) >> keep code clean!
// ------------------------------------------------------------------------------------------- switch case
// user input SWITCH CASE
// use switch case if there is a wide range of possible "IF"s
console.log(
  "whats your favorite color? ----------------- a switch case example"
);
let color = "black";

switch (
  color //not a function   NO return – we have break
) {
  case "pink":
    // isLogged = false;  >> more code possible
    console.log("pink sucks"); // truthy part
    break;
  case "yellow":
    console.log("yellow is alright"); // truthy part
    break; // needed after every case to exit case if its true
  case "green":
    console.log("I like green too"); // truthy part
    break;
  case "black":
    console.log("❤ black is my favorite too ❤"); // truthy part
    break;
  default:
    // is a nice way to tell users stuff (what you actually want from them)
    console.log("my rainbow looks different colors than yours");
}

console.log("How many Kids do you have? ----------------- another example");
let howManyKids = 17;

switch (howManyKids) {
  case 0:
    console.log("lucky you");
    break;
  case 1:
    console.log("you have 1 child");
    break;
  case 2:
    console.log("you have 2 children");
    break;
  case 3:
    console.log("you have 3 children");
    break;
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
    console.log("you have too many children");
    break;
  default:
    console.log("your uterus broke or you are insane");
}

// more array STUFF

const namen = ["Lieschen", "Resi", "Matthias", "Konstantin"];
const sym = ["§", "%", "&", "/"];
console.log(namen.length); // to get number of elements in an array (human counting)
console.log(namen[namen.length - 1]); // to access the last item

let cityName = [];
console.log(cityName.length);
cityName[1] = "Salzburg"; //create item to array !overwrites existing items!
console.log(cityName);

let ciNa = [];
console.log(ciNa.length);
ciNa[0] = "Salzburg";
ciNa[1] = "Graz";
ciNa[2] = "Innsbruck";
console.log(ciNa);
ciNa.push("Wien"); // adds item after last item ---------------------------------------------------- .push
console.log(ciNa);

ciNa.pop(); //removes last item --------------------------------------------------------------------- .pop
console.log(ciNa);
let removedItem = ciNa.pop(); //store removed items in new variable
console.log(ciNa);
console.log(removedItem);

ciNa.unshift("Bregenz"); //adds an item to first position --------------------------------------- .unshift
console.log(ciNa);
ciNa.shift(); //removes first item ---------------------------------------------------------------- .shift
console.log(ciNa);
let remIT = ciNa.shift();
console.log(ciNa);
console.log(remIT);

//const nam = ["Lieschen", "Resi", "Matthias", "Konstantin"];
console.log(nam.indexOf("Resi")); // counts js style -------------------------------------------- .indexOf

let pos = nam.indexOf("Matthias"); // number – which position will be removed
console.log(pos);
let n = 2; //how many items will be removed
let removed = nam.splice(pos, n); // ------------------------------------------------------------- .splice
console.log(removed);
console.log(nam);

nam.splice(0, 1); // removed 1 item on position 0 (Lieschen)
console.log(nam);

//need new friend (old ones have been removed 😞)
nam.push("Sarah");
nam.unshift("Max");
nam[3] = "Marco";

console.log(nam);

for (let i = 0; i < nam.length; i++) {
  console.log(nam[i]);
}
//.split > splits strings into arrays
let stri = "hej there, it's me – did you miss me?";
let newArr = stri.split(" "); //needs a criteria (case sensitive) --------------------------------- .split
let newArrLen = stri.split(" ").length;
console.log(newArrLen);
console.log(newArr);
//.join > joins arrays to strings together
let newStr = newArr.join(" "); // needs criteria as well ------------------------------------------- .join
console.log(newStr);

//.concat > merges two (or more) arrays

let arr1 = [1, 34, 578];
let arr2 = [84, 91, 747];

let arr3 = arr1.concat(arr2); //------------------------------------------------------------------ .concat
console.log(arr3);

arr3 = arr1.concat(arr2, [666, 667, 668]);
console.log(arr3);

//. slice > makes a shallow copy
let fakeCopy = nam; // called reference  – if you push eg it also changes original (nam)
console.log(fakeCopy); // alt+ d >> highlights all similar words

let shallowCopy = nam.slice(); //------------------------------------------------------------------ .slice
console.log(shallowCopy);
shallowCopy.push("Horst"); // only adds in shallow copy not in the original
console.log(shallowCopy);
console.log(nam);

// ways to initialize arrays

// best way (so far) --------------------------------------------------------------
const arr11 = [];
arr1.push("cat");
console.log(arr11);
const arr22 = ["dog", "mouse"];

//new array with the NEW-method ---------------------------------------------------------------------  new

const arr33 = new Array(); // Capital A (Object) > initialize empty NEW array

console.log(arr33);

// const str1 = new String();
// console.log(str1);

// const num1 = new Number();
// console.log(num1);

//making a new array --------------------------------------------------------------------------------- .of
const arr4 = Array.of(1, 3, 8, 48, 92);
console.log(arr4);

// sorting items in an array (by using UTF-16 code)------------------------------------------------- .sort
let alpha = ["c", "r", "w", "m", "C", 8, "%"];
let sortAlpha = alpha.sort();
console.log(sortAlpha); // order: special char., numbers, capitals, smalls

// to reverse an array > first is last and last is first ---------------------------------------- .reverse
let revArr = [2, 3, 88, 9, 7]; //> [7, 9, 88, 3, 2]
let revArrRev = revArr.reverse();
console.log(revArrRev);
console.log(typeof revArrRev); //answer: object

// tells me true or false if it is an array --------------------------------------------------- .isArray()
let boolie = Array.isArray(revArr);
console.log(boolie);

//will start searching backwards (-1 means nothing found) --------------------------------- .lastIndexOf()
const arr5 = ["you", "go", "home", "you", "loser"]; // will never show the first "you"
console.log(arr5.lastIndexOf("you"));
console.log(arr5.indexOf("you"));
//.indexOf would gives you the first "you"

// adds item(s) to array ------------------------------------------------------------------------- .fill()
let arr6 = [22, 55, 7, 78, 99, 125, 2456];
let newArr6 = arr6.fill(101, 1, 3); // (what, from, to) replaces existing items
// fill(what, from)>> replaces from position "from" all remaining items
console.log(newArr6);

// do & while are kind of a loop >> but dizygotic twins
// ---------------------------------------------------------------------------------------------------- do
// with do – we do it at least one time!

let counter = 0; //v declare counter outside loop
do {
  // if false (eg counter = 20) will ignore the do part and just print out counter ONE time
  console.log(counter);
  counter++;
  let count = 0;
  //   do {
  //     console.log("nested " + count);
  //     count++;
  //   } while (count <= 2);
} while (counter <= 10); // stops when condition reached

// ------------------------------------------------------------------------------------------------- while
// if condition not full-filled while ignores loops – you get nothing

let loopOne = 0;
while (loopOne < 5) {
  loopOne++; //adds up before printing out
  console.log(loopOne);
}

//more conditions possible with do-loop (than for-loop)

// =========================== -1 means ALWAYS nothing found =============================================
// ================== NO returns in loops (return belong in functions)====================================

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
// asynchronous thingie (java is synchronous) cause jumping around

// declare this way cause the logIn Call is before function
function logIn2() {
  halloUser();
}
//better declare inner function separately – can be used in different places
function halloUser2() {
  return `hej you, looking good 2day`;
}

// ================================================================================================ .map()
// map is a loop and needs a function
// old way : for (let i = 0; i<= arr.length;i++) replacement is .map
const names = ["Konstantin", "Lieschen", "Matthias", "Resi"];
//           ArrayName
const newArrr = names.map((name, indexnumer) => {
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

// ============================================================================================= .reduce()
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

// ================================================================================================ break;
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

// ============================================================================================= continue;
//skipping an interaction
for (let i = 1; i <= 10; i++) {
  if (i == 4) {
    continue; //not printing out 4
  } else {
    console.log(i);
  }
}

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

// ============================================================================================= .filter()
// getting an array with items that aline with your condition: Array.prototype.filter(<function>)
// filter always with array!

const naems = ["Matthias", "Hans-Jörg", "Konstantin", "Catharina"];
const filArr = naems.filter((naem) => naem.length == 9);
console.log(filArr); // Hans-Jörg, Catharina

// =============================================================================================== .find()
// getting a the first item that aline with your condition: Array.prototype.find(<function>)
// find always comes back with single value

const nUm = [1, 2, 34, 5, 6, 7];
const biggerThan5 = nUm.find((nombre) => nombre > 5);
console.log(biggerThan5); // > 34 – cuz it's the first true item, doesn't bother the others

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
console.log(a.charCodeAt(0)); // - 96 to translate to latin alphabet

console.log("===== OBJECTS =====");
