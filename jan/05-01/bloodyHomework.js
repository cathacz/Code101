s// I thought tomorrow is off and it will be nice to practice a bit more, so here are some fun exercises >> we have a different understanding of "fun" ;)

function display(str) {
    console.log(str);
}

// MATH – Perform Mathematical Tasks with JavaScript. Remember: you must use the Math functions and print all results to the console!
display("Math-Stuff");

// 1. Minimum and maximum
display("1. Minimun & Maximum:");

// a. Lowest Number >> Print out the lowest number between -1 and 4.
display(Math.min(-1, 0, 1, 2, 3, 4));

// b. Highest Number >> Print out the highest number between -1 and 4.
display(Math.max(-1, 0, 1, 2, 3, 4));

// 2. Rounding
display("2. Rounding:");

let a = 3321.32321;
let b = 326.76;
let c = 76788.7;
let d = -9.78;
let e = 43.342;

// a. Round up >> Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

function roundUp(num) {
    let result = Math.ceil(num);
    display(result);
}
roundUp(a);
roundUp(b);
//..

display(Math.round(7.49999999));

display(Math.ceil(a));
display(Math.ceil(b));
display(Math.ceil(c));
display(Math.ceil(d));
display(Math.ceil(e));

// b. Round down >> Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

display(Math.floor(a));
display(Math.floor(b));
display(Math.floor(c));
display(Math.floor(d));
display(Math.floor(e));

// Strings and Numbers
display("Strings and Numbers");

// 1. Concatenation.
display("1. Concatenation:");

// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;

// Expected Output: "Hi, my name is Nancy and I am 25"
display(introSentence + " " + age);
display(`${introSentence} ${age}`);

// In this case, what is the + operator doing? Comment your answer in the js file.

// 2. Converting
display("2. Converting:");

// Create a variable with the value of “1005”. Convert it to a number.
let x = "1005";
display(x);
display(parseInt(x, 10));

// Create a variable with the value of “10.05". Convert it to a number.
let y = "10.05";
display(y);
display(parseFloat(y));


display(Math.round(7.49999999));



function oddEven (num) {
    return num % 2 == 0 ? "even" : "odd";
}
display(oddEven(59));

function oddOReven(num){
    return num % 2 == 0 ? "even" : "odd";
}
display(oddOReven(49));