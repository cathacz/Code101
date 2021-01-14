//declair varibals: let, const, var
let x = 23; // can be changed later on, not hoisted
const y = 76; // cannot be changed , stays
var z = 91; // global variböe (old skool) = let but var ist hoisted, let not hoisted
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
let grab = "Grap a random character from this string.";
let randomGrab = Math.floor(Math.random() * grab.length); // creates random number innerhalb von string "grab"
console.log(grab[randomGrab]); // grabs character from string "grab" with random generated position (number) with "randomGrab"


// JS methods for str (.trim, .length, .includes, .split, .toUpperCase, .toLowerCase)
let cat = " Catha   "
console.log(cat.length); // .length >> gives you "human" count answer incl. empty spaces
console.log(cat.trim()); // .trim >> removes empty spaces before and after stuff in string NOT between words
console.log(cat.trim().length); // first trim than count >> combined methods
console.log(cat.toLocaleUpperCase()); // all to upper cases

//.includes
console.log(cat.includes("C")); // true >> "C" is included in string

//.split
console.log(cat.split(" "));

// if >> condition statement

if (1 == 22) { // ||(or) >>> &&(and)
    console.log("yay");
    //} else {console.log("nay");
};
console.log("totally ignoring the 'else' part"); // works without "else"


// function

function fun(num1, num2) {// old skool way to declair a function
    let numSum = num1 * num2;
    return numSum;
};
console.log(fun(3, 9));  //btw NaN means "Not a Number"


                //synchronis running line by line

// we need: [] {} () <> ; : , . - _ / \ ! ? @ % $

//array

// for loop


// console.log ("check: ", check) (check1 + check2) >> keep code clean!