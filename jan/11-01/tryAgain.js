/*
Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
*/

console.log("----- Even OR Odd -----");

console.log("----- 1st Approach -----");

for (let i = 0; i <= 20; i++) {
    if (i % 2) { console.log(`${i} is odd`); }
    else { console.log(`${i} is even`); }
}

console.log("----- 2nd Approach -----");

for (let i = 0; i <= 20; i++) {
    i % 2 == 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}

console.log("----- I did it in a Row -----");

let text = "";
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) { text += i + " is even, "; }
    else { text += i + " is odd, "; }
}
console.log(text);


console.log("---");
console.log("---");
console.log("---");

// 100 200 300 400 500 600 700 800 900 1000
text = "";
for (let i = 1; i <= 10; i++) {
    text += i * 100 + ", ";
}
console.log(text);

text = "";
for (let i = 1; i <= 10; i++) {
    let j = i * 100;
    text += j + " ";
}
console.log(text);

console.log("---");
console.log("---");
console.log("---");

// 0 2 4 6 8 10
//even
text = "";
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        text += i + ", ";
    }
}
console.log(text);
//odd
text = "";
for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        text += i + ", ";
    }
}
console.log(text);

console.log("---");
console.log("---");
console.log("---");

// 3 6 9 12 15

text = "";
for (let i = 0; i <= 27; i++) {
    if (i % 3 == 0) {
        text += i + ", ";
    }
}
console.log(text);

console.log("---");
console.log("---");
console.log("---");

// 9 8 7 6 5 4 3 2 1 0
text = "";
for (let i = 9; i >= 0; i--) {
    text += i + ", ";
}
console.log(text);

text = "";
for (let i = 9; i >= 0; i--) {
    if (i % 3 == 0) {
        text += i + ", ";
    }
}
console.log(text);

console.log("---");
console.log("---");
console.log("---");

// 1 1 1 2 2 2 3 3 3 4 4 4
// -------------------------------------------more 2morrow
text = "";
for (let i = 1; i <= 4; i++) {
        text += i + ", ";
}
console.log(text);

console.log("---");
console.log("---");
console.log("---");

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4