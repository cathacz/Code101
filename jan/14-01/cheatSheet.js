//declare variables: let, const, var
let x = 23; // can be changed later on, not hoisted
const y = 76; // cannot be changed , stays
var z = 91; // global variable (old skool) = let but var ist hoisted, let not hoisted
//hoisting --- read that

//string
let str = "This is a string";

//bracket notions: [] grab letter from string;
console.log(str[8]);

//escaping spatial characters (\n , \' , \") >> start new line
let newLine = "first line \n second line";
console.log(newLine);

//numbers --- all the basic math + - / * (not a function it is a method)
let o = 5;
let p = 7;
console.log(o * p); // 5 * 7 = 35

let rechnung = o * p + 5;
console.log(rechnung);

// float numbers
let float = 22.45;
console.log(typeof float); // tells you number

// console(OBJECT).log(METHOD)(something(DEPENDS))

//boolean (Wahrheitswert (true/false))
let bool = true;
console.log(bool);
let check = 12 < 72;
console.log("check: ", check);
// typeof = small function that tells what type a variable or stuff is like

// conditions;
// = (assigning value to variable)
// == (equal [type doesn't matter])
// === (comparing value and type, both must fit)
// !== (not equal)
let q = true;
console.log(!q); // ! makes false true & true false
// >= (bigger or equal)
// <= (smaller or equal)
// > (bigger)
// < (smaller)

// ternary Operator
//                truthy : falsy
console.log(true ? "yay" : "nay");
console.log(176 > 987 ? "yay" : "nay");
console.log(136 == 987 ? 1 : 0);

// Math.stuff: Js methods from Math(.max, .min, .random, .floor, .ceil)

console.log(Math.max(1, 6, 93, 826, 1747)); // picks max
console.log(Math.min(1, 6, 93, 826, 1747)); // picks min
console.log(Math.floor(float));
console.log(Math.ceil(float));
console.log(Math.random()); //creates number between 0 and 1
console.log(Math.floor(Math.random() * 6) + 1); // imagine a Dice

// grap random character from string
let grab = "Grab a random character from this string.";
let randomGrab = Math.floor(Math.random() * grab.length); // creates random number within string "grab"
console.log(grab[randomGrab]); // grabs character from string "grab" with random generated position (number) with "randomGrab"

// JS methods for str (.trim, .length, .includes, .split, .toUpperCase, .toLowerCase)
let cat = " Catha   ";
console.log(cat.length); // .length >> gives you "human" count answer incl. empty spaces
console.log(cat.trim()); // .trim >> removes empty spaces before and after stuff in string NOT between words
console.log(cat.trim().length); // first trim than count >> combined methods
console.log(cat.toLocaleUpperCase()); // all to upper cases

//.includes
console.log(cat.includes("C")); // true >> "C" is included in string

//.split
console.log(cat.split(" "));

// if >> condition statement

if (1 == 22) {
  // ||(or) >>> &&(and)
  console.log("yay");
  //} else {console.log("nay");
}
console.log("totally ignoring the 'else' part"); // works without "else"

// function
//           arguments (num1, num2)
function fun(num1, num2) {
  // old skool way to declare a function
  let numSum = num1 * num2;
  return numSum;
} //            parameters ( 3, 9)
console.log(fun(3, 9)); //btw NaN means "Not a Number"

//synchronis running line by line

// we need: [] {} () <> ; : , . - _ / \ ! ? @ % $
console.log(`:sob:`); // smilies don't work

//Es6 function
//never declare a function with let or var ALWAYS use const (can't be changed, can't get lost)
const functionName = () => {
  //new way to write a function
  return `an As6 function`;
};
console.log(functionName());

//array >> alway [!]
//              0        1          2
const arr = ["Catha", "Matthias", "Konstantin"];
console.log(arr[2]);
let arrNum = 1;
console.log(arr[arrNum]);
arrNum++; //adds 1 to arrNum
console.log(arr[arrNum]);

const NumArray = [19, 84, 20, 16, 39, 932, 198, 2, 23, 8373, 71];
console.log(NumArray[NumArray.length - 1]);

// for loop

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

//"return" (is for functions) in looops is a way to exit – better use >break<

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
    console.log("your uterus broke");
}
