console.log("--------Exercise-------");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

/*
function isLEQzero(p) {   
    p == 0 ? console.log(`true`) : console.log(`false`);
}
console.log(isLEQzero(4)); // almost und woher kommt das verdammte 'undefined'
*/

function isLEQZero(p) {
    return p <= 0 //? console.log("true") : console.log("false");

}
console.log(isLEQZero(3)); // WHY WHY WHY is there an undefined???? AAAAAAAAAAHHHHHHHHHHHH
console.log(isLEQZero(0));
console.log(isLEQZero(-4));
console.log(isLEQZero(10));
// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false

console.log("--------Exercise-------");

//  Dog Y(ars. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

function dogAge(i) {
   
    return dogAge = i * 7;
}
console.log( `Your doggy is ${dogAge(4)} years in dog years!`);
// Example:

// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"

console.log("--------Exercise-------");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.
age = Number;
sn = Number;
function calcLifetimeSupply(age, sn) {
    i = 100 - age;
    return calcLifetimeSupply = i * 365 * sn;
}
console.log(`The snack company should provide you with ${calcLifetimeSupply(25, 2)} units, until you are a ripe old age of 100. Happy snacking!`);
// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

console.log("--------Exercise-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//console.log(months[3 - 1]);

function monthName(num) {

    return months[num - 1];
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// Examples:

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

console.log("--------Exercise-------");
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
/*const countOccurrences = (str, chr) => {
    let strIntoArr = str.split("");
    console.log(strIntoArr);
    let count = 0;
    for (let i = 0; i < strIntoArr.length; i++) {
        if (strIntoArr[i] == chr) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences("I totally copy/past that from yesterday", "a"));
*/
const countOccurrences = (str, chr) => str.split(chr).length - 1;
console.log(countOccurrences("Roman is helping me now", "i"));
// Example:

// countOccurrences("this is a string", "i") ➞ 3

console.log("--------Exercise-------");
/*  draw this shapes in your console



First shape
T
TT
TTT
TTTT
Second shape
****
***
**
*
Third shape
1
12
123
1234
12345
Bounce: Forth shape
Be creative and show us your Artistic side
*/

let draw = "T";
for (i = 1; i <= 4; i++) {
    console.log(draw.repeat(i));
}
draw = "*";
for (i = 4; i >= 1; i--) {
    console.log(draw.repeat(i));
}
draw = "12345";
let text = "";
for (i = 1; i <= 5; i++) {
    text += i;
}
console.log(text);

text = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < 4; j++) {
        text += i + " ";
    }
}
console.log(text.repeat(1));


console.log("--------Exercise-------");
/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345
 */

let str = ``;
const numbersCount = () => {
    for (let i = 0; i <= 5; i++) {
        str += `\n`;
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        // something
    } console.log(str);
};
numbersCount();
/*Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/
str = ``;
const numbersCountBackwards = () => {
    for (let i = 5; i >= 0; i--) {
        str += `\n`;
        for (let j = 5; j >= i; j--) {
            str += j;
            console.log(str);
        }
        // something
    } 
};
numbersCountBackwards();


console.log("--------Exercise-------");
/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/
let storeArr = ["milk", "eggs", "cheese", "butter"];
function inventoryCheck(str){
    return storeArr.includes(str);
}
console.log(inventoryCheck("cheese"));
console.log(inventoryCheck("ham"));

console.log("--------Exercise-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

function passwordGen(){
    return 
}

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
console.log("--------Exercise-------");

