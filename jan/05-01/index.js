// console.log(x);
// var x;
// x = null; // >> means its empty – type = object
// x = true; // >> boolean
// x = ""; // >> its a string
// x = undefined;
// console.log(typeof x);

sum(3, 4);
function sum (x, y) {
    return x + y;
    x+y+x+x+x+y;
}
console.log(sum(6,9));

let x = 3;
let y = 4;

true ? console.log("true") : console.log("false");

let str ="Catha";
console.log(str[0]);
console.log(str[str.length-2]);

let longStr = "               Catha fetzt!              ";
console.log(longStr.trim());

function display (str) {
    console.log(str);
}
display ("Karl-Herbert");
// + - * /
console.log(y % x); // >> remender 

// float numbers 

let int1 ="144";
let int2 = 1.5;
console.log(int1 + " " + int2);
//is it NOT a number = isNaN
isNaN (int1) ? console.log("true") : console.log("false");

display(int2 * int1);

let newNum = parseInt(int1,10); //>> diget tells hexadezimal, binary, etc (0; 10; 16) >> 10 most important cause dezimal the most common!
display (newNum);

let nuFloat = parseFloat(int2);
display(nuFloat);


let a = 2;
let b = 40;
display(a + " " + b); // = concatenate



let c = 1;
let d = 2;
let e = 22;
Boolean = b ? console.log("30") : console.log("it's odd");

let numb = 44;
let numX = numb % 2;
display(numX);
console.log(numX == 0 ? `${numb} is even`:`${numb} is odd`);

function oddOReven(num){
    return num % 2 == 0 ? "even" : "odd";
}
display(oddOReven(40));


// * + - /

let summ = a+b;
let div = a/b;
let mul = a*b;
let min = a-b;
console.log(summ, div, mul, min);

// ++ --

++a;
b--;

// ** > ²
let power = 4 ** 2;
display(power);

// Math.floor() >> round down
// 3.33

let  floaty = 1.8;

let realInt=Math.floor(floaty);
display(realInt);

// Math.ceil() >> round up

let realInt2 = Math.ceil(floaty);
display(realInt2);

//Math.max() Math.min()  grabs highest/lowest number in group of number

display(Math.min(1, 3, 6, 90, 32, 7896, 432, -4));


let p = "123";
let newNum111 = parseInt(p);
display(newNum111);
let q = "130.7";
let newNum112 = parseFloat(q);
display(newNum112);
display(parseFloat(q));
let isDog = "dog";
display(isDog?`pat, pat` : `find me a dog to pat!`);
