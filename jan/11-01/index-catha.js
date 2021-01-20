//"old-skool" function
function print(str) {
    console.log(str);
}
// function in ES 6
const display = (str) => {
    console.log(str);
}
console.log(typeof display);
print("Hey");
display("pretty face");


let a = "tschibrat"
display("hey" + "you");
display(`hey you ${a}`);
print(`hey you ${a}`);


const sum = (x, y) => x + y;
console.log(sum(3, 4));

const isBigger = (num1, num2) => num1 < num2;
console.log(isBigger(297, 7383));

const printFullWord = (firstName, age, add) => console.log(`hey ${firstName}, you learned ${add} with your ${age} years. `);

printFullWord("Gina", 23, "nothing");

let isLogged = false;
const login = () => {
    isLogged = true;
};
login();


let name1 = "Catha";
let name2 = "Seppi";
let name3 = "Alpha";

// index of:        0       1          2
let namesArr = ["Catha", "Seppi", "Alpha"];
console.log(namesArr[2]);

// index of      0  1  2  3  4  5  6  7  8  9
const numbers = [2, 0, 8, 1, 9, 7, 3, 6, 5, 4];
console.log(numbers[5]);

const hobbies = ["sleeping", "photography", "drawing", "gardening", "building stuff"];
// DRY
// let i = 0;
// console.log (hobbies[i]);
// i++;
// console.log (hobbies[i]);
// i++;


// better Way >>> LOOPS!
print("L O O P S")
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
};

for (let i = 0; i <= 10; i++) {
    console.log(i);
};

for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 1 = ${i * 1}`);
};

// mixed Arrays possible
const mixedArr = ["hell", 1010, true];
console.log(typeof mixedArr[2]);

const chrArr = ["a", "b", "c", "d"];
for (let i = 0; i < chrArr.length; i++) {
    console.log(chrArr[i].toUpperCase());
};

const names = ["catha", "josef", "gerhard"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i][0].toUpperCase());

    str = "";
    str = names[i][0].toUpperCase() + names[i].substring(1);
    console.log(str);
}

console.log(1 == 11 ? "cool" : "NO");
let isSmart = false;
if (isSmart) {
    console.log("cool");

} else { console.log("NOOOO") };

let count = 0;
if (22 * 3 == 299 + 3) { count++; console.log("you are right"); }
// \' \" >> ignore 
// \n >> new line
else { count--; console.log("No that's \n this is new line"); };


// functions, if/else, objects, scopes all with {}
// arrays, strings []
// if conditions, method, conditions, function call ()


let p = true;
let q = false;
let r = 11 == 23;
if (p == q && r != p || r == p) {
    console.log("WOW");
} else { console.log("I don't know what you want from me"); };

console.log("The odd/even reporter");
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
for (let i = 0; i <= 20; i++) {
    if (i % 2) { console.log(`${i}  is odd`); } else { console.log(`${i} is even`); }
};

for (let i = 0; i <= 20; i++) {
    console.log(i % 2 == 0 ? `${i}is odd` : `${i} is even`);
}
// 100 200 300 400 500 600 700 800 900 1000
console.log("Hunderter");
for (let i = 1; i <= 10; i++) {
    console.log(i * 100);
}//#endregion
// 0 2 4 6 8 10
console.log("EVEN");
let text = "";
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) { text += i + " "; }
}
console.log(text);
text = "";

for (let i = 0; i <= 10; i += 2) {
    text += i + " ";
}
console.log(text);
//3 6 9 12 15
console.log("ODD");
text = "";
for (let i = 3; i <= 15; i++) {
    if (i % 3 == 0) { text += i + " "; }
}
console.log(text);
// 9 8 7 6 5 4 3 2 1 0
console.log("BACKWARDS");
text = "";
for (let i = 9; i >= 0; i--) {
    text += i + " ";
}
console.log(text);

// 1 1 1 2 2 2 3 3 3 4 4 4
text = "";
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        text += i + " ";
    }
}
console.log(text);

console.log("----------------------hej there you are");
 let countNum = 0;
text = "";
 for (let i = 1; i <= 4;) {text += i + " ";
      if (countNum != 0 && countNum % 3 == 0) {i++; countNum = 0;}
     countNum++}
console.log(text);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
text = "";
for (let i = 1; i <= 3; i++) {      //i = 1
    for (let j = 0; j <= 4; j++) {  //j = 0
        text += j + " ";
    }
}
console.log(text);

/// repeat 
text = "";
for (let i = 0; i <= 4; i++) {
    text += i + " ";
}
console.log(text.repeat(3));

// I'm super lost

for (let i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(`${i}*${j} = ${i * j}`);
    } console.log("----------------------- new table");
}

let st = "Hej this is me";
let stToArr = st.split(" ");
console.log(stToArr);

let backToSt = stToArr.join(" ");
console.log(backToSt);


// 1 1 1 2 2 2 3 3 3 4 4 4
text = "";
for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
        text += i + " ";
    }
}
console.log(text);


const countOccurrences = (str, chr) => {
    let strIntoArr = str.split("");
    console.log(strIntoArr);
    let count = 0;
    for (let i = 0; i < strIntoArr.length; i++){
        if (strIntoArr[i] == chr){
            count++;
        }
    }
    return count;
}
console.log(countOccurrences("this is a szring", "i"));


text ="";
for (let i = 1; i <= 4;i++) {
    text += i + " ";
}
console.log(text.repeat(3));


