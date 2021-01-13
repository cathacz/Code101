console.log("--------Exercise 1-------");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

const isLEQZero = (num) => {
    return num <= 0
};

console.log(isLEQZero(3));

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
console.log("--------Exercise 2-------");

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

const dogAge = (i) => {
    let result = i * 7;
    return `Your doggy is ${result} years in dog years!`;
};

console.log(dogAge(4)); // function Call

// Example:

// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"

console.log("--------Exercise 3-------");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

const calcLifetimeSupply = (age, dailySnack) => {

    let yearlySnack = dailySnack * 365;
    let yearsToLive = 100 - age;
    let result = yearlySnack * yearsToLive;
    return `The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking`
    //return calcLifetimeSupply = (100 - age) * 365 * dailySnack;
}

console.log(calcLifetimeSupply(40, 3));
// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

console.log("--------Exercise 4-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(months[0]);

const monthName = (monthNum) => {
    let theNum = monthNum - 1; // clean code > with the extra variable
    if (theNum >= 0 && theNum <= 11) {
        return months[theNum];
    }
    else {
        return `There are only 12 months!`
    }
}
console.log(monthName(13));

// Examples:

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

console.log("--------Exercise 5-------");
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

const countOccurrences = (str, letter) => {
    let result = str.split("");
    // console.log(result);
    let counter = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == letter) {
            counter++;
        }
    }

    return counter;
};
console.log(countOccurrences("this is a string", "i")); // expected 3
console.log(countOccurrences("xoxo, gossip girl", "o")); // expected 3

// Example:

// countOccurrences("this is a string", "i") ➞ 3

console.log("--------Exercise 6-------");
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

let alphabeth = ["A", "B", "C", "D", "E", "F"];
const drawSomething = () => {
    let a = alphabeth[0];
    let b = alphabeth[1];
    let c = alphabeth[2];
    let d = alphabeth[3];
    let e = alphabeth[4];
    let f = alphabeth[5];
    for (let i = 0; i <= 5; i++) { }
};

console.log("--------Exercise 7-------");
/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345
*/
/*const numbersCount = () => {
  for (let i = 0; i <= 5; i++) {
    // something
    for (let j = 1; j <= i; j++) {
        // something
    }
      // something
  }
};
numbersCount(); */
/*
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/
const numbersCount = () => {
    let text;
    for (let i = 5; i >= 0; i--) {
        // something
        text = "";
        for (let j = 1; j <= i; j++) {
            // something
            text += j;
        }
        // something
        console.log(text);
    }
};
numbersCount();

const numbersCountBackwards = () => {
    let str;
    for (let i = 6; i >= 0; i--) {
        str = "";
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        console.log(str);
    }
};
numbersCountBackwards();

console.log("--------Exercise 8-------");
/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/
let storeArr = ["milk", "eggs", "cheese", "butter"];
const inventoryCheck = (str) => {
    return storeArr.includes(str);
};

console.log(inventoryCheck("ham"));
console.log(inventoryCheck("milk"));

console.log("--------Exercise 9-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password


const passwordGen = () => {
    let allCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "$", "§", "%", "&", "/", "(", ")", "=", "?", "A", "B", "C", "D", "E", "F",];
    let result = "";
    let randomNum;
    for (let i = 0; i <= 30; i++) {
        randomNum = Math.floor(Math.random() * allCharacters.length); //need to be inside the loop!!
        result += allCharacters[randomNum]; //>> result = result + allCharacters[randomNum]>> so every character is random!

    }
    return result;
};

console.log(`New Password: ${passwordGen()}`);


// ------------------------------------------------------------------------other way
/*
let numbers = [0,1,2,3,4,5,6,7,8,9];
let characters = ["a","b","c"];

const passGen = () => {
    let result = "";
    for (let i = 0; i <17; i++) {
        if (i%2==0){
            randomNum = Math.floor(Math.random()* numbers.length);
            result += 
        } else 
    };
};
*/
// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP


console.log("-----------------------------------------------------------------Start the Day here!");

// default value

const saveData = (userName = "No Name", kids = 0) => {
    userData = userName;
};
saveData();
console.log(userData);

const defVal = (dV = "Catha fetzt") => {
    return dV;
};
console.log(defVal("Hey there"));
console.log(defVal()); // he was too fast (angry smily)

const nA = ["Catha", "fetzt", "hart"];
console.log(nA[1][2, 3]);

function sum(x, y) { return x * y; }; //old skool function – const functionName = () => {}; BETTER use that!
sum(2, 4);

const print = (str) => {
    let newStr = `${str} fetzt!`
    return newStr;
};
console.log(print("Catha"));



for (let i = 100; i > 100; i++) {
    console.log(i);
    i += 10;
};


// semi good explanation

const numbersCountExplained = () => {
    let text; // empty --------------------------------------------step 2
    for (let i = 5; i >= 0; i--) { // start loop --------------- step 3 

        text = ""; // initial with empty text -------------------step 4 
        for (let j = 1; j <= i; j++) { // start loop in lopp ---- step 5

            text += j; // grap text plus j (=1) ---------------------- step 6
            // add 1 j = 2 (still less than 5) do it
            //...
            // add 1 j = 5 (equal 5) do it 
            // add 1 j = 6 (more than 5) EXIt loop -----------------------step 7
        }
        console.log(text);
    }
};
numbersCountExplained(); // call function -------------------------------- step 1

// start i-loop again but with 1 less (i--) means i=4------------------------step 8
// start over with STEP 3 but remember i = 4; till STEP 7 

// i = 5 assign 5 to i; i >=5 escape loop; 
// j = 1 ; j <= i works cuz 1 >= 5; 

// 11. XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO(“ooxx”) ➞ true
// isEqualNumXandO(“xooxx”) ➞ false
// isEqualNumXandO(“ooxXm”) ➞ true (case insensitive)
// isEqualNumXandO(“zpzpzpp”) ➞ true (returns true if no x and o)
// isEqualNumXandO(“zzoo”) ➞ false

const isEqualNumXandO = (str) => {
    let newStr = str.toLowerCase();
    let countX = 0;
    let countO = 0;
    for (let i = 0 ; i < newStr.length; i++) {
        if (newStr[i] == "x") {
            countX++;
        }
        if (newStr[i] == "o") { // if newStr.includes["o"]
            countO++;
        }
    }

if (countX === countO) {
     return true;
} else {
    return false;}
  
 
};

console.log(isEqualNumXandO("ooxx"));
console.log(isEqualNumXandO("xooxx"));



const xANDos = (str, letter) => {
    let result = str.split("");
    // console.log(result);
    let counter = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "x" / "o") {
            counter++;
        }
    }

    return counter;
};
console.log(xANDos("ooxx"));


// calculating Tipps

const tipping = (billONE, billTWO, billTHREE) => {
    const tenP = 1.1;
    const fifteenP = 1.15;
    const twentyP = 1.2;

    return `Bill One: ${billONE*tenP}€ Bill Two: ${billTWO*fifteenP}€ Bill Three: ${billTHREE*twentyP}€`

}
console.log(tipping(22.35, 26.67, 35.92));