//print out
console.log("Catha")
//var
let x = 3;
let str = "Leipzig";
let old = true;
//tenerary op
let kid = 18;
kid > 16 ? console.log("yay") : console.log("nay");
//typeof
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
//length
let name = "Catha";
console.log(name.length);
console.log(name[0]);
let something = 1231;
something = 7889;
console.log(something);
const fatherName = "Gerhard";
console.log(fatherName);
//let fatherName = "Josef";
var global = "I'm global, Biatch!";
{
    let local = 22;
    global = "jajajaja";
    var locGlo = "mimi";
}
console.log(locGlo);

//function
function print(str) {
    console.log(str);
}
print("Catha");
console.log(global);

print("bibubiboo");

function sum(x, y) {
    let z = 0;
    z = x + y;
    return z;

}

console.log(sum(2, 3));
let sumRe = sum(25, 44);
console.log(sumRe);


// option 1 
console.log(5)
// option 2 
let num = 5;
console.log(num);
//option 3
let a = 2;
let b = 3;
console.log(a + b);

// and yet there is another one
console.log(3 - 2 - 4 + 2 + 6);

let oString = "Catha fetzt!";
print(oString.length);
let str1 = oString.substring(6);
console.log(str1);
let str2 = oString.substring(6, 10);
console.log(str2);

let str3 = oString.toUpperCase(6, 10);
console.log(str3);

let str4 = oString.toLowerCase(6, 10);
console.log(str4);

let vorName = "cATha";
let firstChar = vorName[0].toUpperCase();
console.log(firstChar);
let restChar = vorName.substring(1).toLowerCase();
console.log(restChar);
let finNam = firstChar + restChar;
console.log(finNam);

let shortForm = vorName[0].toUpperCase() + vorName.substring(1).toLowerCase();
console.log(shortForm);

/** 
 * long
 * comment
 * if
 * needed
 * !
 */

//camelCase vs snake_case 

let longStr = "Catha fetzt so gewaltig, dass es weh tut!";
let text = longStr.includes("Penis");
console.log(text);


// Exercises

//#1
let walking = "I can walk in the park all day!";
console.log(walking.substring(18,22));
// #2
let heWo = "Hello World!";
let hW = heWo.toUpperCase();
console.log(hW);
// #3
let earth = "Earthlings";
let ea = earth.toLowerCase();
console.log(ea);
//#4
let jS = "JavaScript";
console.log(jS.substring(3, 6));
//#5
let klo = "Nice Shoes!";
let spuel = klo.includes("l");
console.log(spuel);
//#6
let newStr = "J" + jS + "t";
console.log(newStr);
console.log(jS[0]+jS+jS[9]);
console.log(jS.substring(0,1));

//subString
let longText = "This is a very long text";
let subStr = longText.substring(longText.length - 9);
console.log(subStr);
//slice
let sliceStr = longText.slice(5);
console.log(sliceStr);
//instead of "" & '' >> `` (=backtick)
let firstUserName ="Martin";
let lastUserName = "Maurer";
let address = "Mainstr. 6a";
console.log(`Hi I'm ${firstUserName} some text ${lastUserName}, my address is ${address}`);

var gloVar = "This is a global Variable";
console.log(gloVar);
gloVar = "More global than ever";
function sub(x, y){
    let local = "local stuff";
    console.log(local);
    return x - y;
    var localGlobal = "some stuff inside of here"
}
console.log(sub(10,4));

//numbers   ++ += -- -=

let num1 = 1;
// num1 = num1 + 1;
// num1 += 1;
// num1 ++;
console.log(num1);
let num2 = 2;
num2 -=1;
console.log(num2);

//increment ++  decrement --
let w=10;
w++;
++w;
w--;
--w;
console.log(w);

//afternoon assignment 

// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more. (eg. of output: javascript => iptJavaScriptipt)

console.log(jS.substring(3,6)+jS+jS.substring(3,6));
console.log(jS.substring(jS.length -3)+jS+jS.substring(3,6));

//  8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.

let tM = "it is a text message";
console.log(tM.toUpperCase(), tM.includes("Java"));

tM.includes("Java") ? console.log(tM.toUpperCase()) : console.log(tM.toLowerCase());

console.log(11 == 12 ? "happy": "unhappy");
//  9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ

console.log(jS.substring(4,9)+jS.substring(0,4))

//  10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.

let a1 = "Alpha";
let b2 = "Betha";
let c3 = "Gamma";
console.log(`${a1}² plus ${b2}² equals ${c3}²`);

// 11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let foxy = "the quick brown fox";
console.log(foxy[0].toUpperCase()+foxy.substring(1));

