console.log("===== Basic Stuff =====");

// =================================================================================== declaring variables
// --------------------------------------------------------------------------------------------------- let
let x = 23; // can be changed later on, not hoisted
// ------------------------------------------------------------------------------------------------- const
const y = 76; // cannot be changed, stays
// --------------------------------------------------------------------------------------------------- var
var z = 91; // global variable (old skool) = let but var is hoisted, let not hoisted
//hoisting --- read that

// =============================================================================================== strings
let str = "This is a string"; // a string lives in " "

//bracket notions: [ ] grab letter from string; -------------------------------------------------string[ ]
console.log(str[8]); // >> a
// starts counting at 0 and counts empty spaces as well

//escaping spatial characters (\n , \' , \") >> start new line
let newLine = "first line \nsecond line";
console.log(newLine);

// ========================================================================================== string.stuff
// JS methods for strings (.trim, .length, .includes, .split, .toUpperCase, .toLowerCase)

let cat = " Catha   ";

// ----------------------------------------------------------------------------------------------- .length
console.log(cat.length); // >> 9 >> .length >> gives you "human" count answer incl. empty spaces

// ----------------------------------------------------------------------------------------------- .trim()
console.log(cat.trim()); // >> Catha >>.trim >> removes empty spaces before and after stuff in string NOT between words

console.log(cat.trim().length); // >> 5 >> first trims, then counts remaining letters (combined methods)

// ------------------------------------------------------------------------ .toUpperCase()&&.toLowerCase()
console.log(cat.toUpperCase()); // >>  CATHA >> all characters to upper cases
console.log(cat.toLowerCase()); // >>  catha >> all characters to lower cases

// ------------------------------------------------------------------------------------------- .includes()
console.log(cat.includes("C")); // >> true >> "C" is included in string
console.log(cat.includes("c")); // >> false >> .includes() = case sensitive!

// ---------------------------------------------------------------------------------------------- .split()
console.log(cat.split(" ")); // >> ["", "Catha", "", "", ""] >> gives me an array of string

// =============================================================================================== numbers
// numbers >>> all the basic math + - / * (not a function it is a method)
let o = 5;
let p = 7;
console.log(o * p); // >> 5 * 7 = 35

let bill = o * p + 5;
console.log(bill); // >> (5 * 7) + 5 = 40

// ----------------------------------------------------------------------------------------- float numbers
// = numbers with fractional parts (eg 0.25)
let float = 22.45;
console.log(typeof float); // // >> number

// ============================================================================================ Math.stuff
// Math.stuff = Js methods from Math(.max, .min, .random, .floor, .ceil)

console.log(Math.max(1, 6, 93, 826, 1747)); // >> 1747  >> picks max
console.log(Math.min(1, 6, 93, 826, 1747)); // >> 1     >> picks min
console.log(Math.floor(float)); // >> 22                >> rounds down (to the floor)
console.log(Math.ceil(float)); // >> 23                 >> rounds up (to the ceiling)
console.log(Math.random()); // >> ?.??????              >> creates number between 0 and 1
console.log(Math.floor(Math.random() * 6) + 1); // >> ? >> imagine a Dice

// ------------------------------------------------------------------------------- Math.random with string
// grab random character from a string using Math.random
let grab = "Grab a random character from this string.";
let randomGrab = Math.floor(Math.random() * grab.length); // creates random number within string "grab"
console.log(`A random character: ${grab[randomGrab]}`); // grabs character from string "grab" with random generated position (number) with "randomGrab"

// ============================================================================================== boolean
// (= Wahrheitswert (true/false))
let bool = true;
console.log(bool); // >> true

let check = 12 < 72;
console.log("check:", check); // >> check: true

// ============================================================================================ conditions

// = (assigning value to variable)
// == (equal [type doesn't matter])
// === (comparing value and type, both must fit)
// !== (not equal)

let q = true;
console.log(!q); // >> false (! makes false true & true false)

// >= (bigger or equal)
// <= (smaller or equal)
// > (bigger)
// < (smaller)

// ====================================================================================== ternary operator
// ( = bedingter Operator) >> ? _ : _

//                truthy : falsy
console.log(true ? "yay" : "nay"); // >> yay
console.log(176 > 987 ? "yay" : "nay"); // >> nay
console.log(136 == 987 ? 1 : 0); // >> 0

console.log("end here for now");
