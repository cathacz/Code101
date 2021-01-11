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
print ("L O O P S")
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
};

for (let i = 0; i <= 10; i++) {
    console.log (i);
};

for (let i = 1; i <=10; i ++) {
console.log(`${i} * 1 = ${i*1}`);
};


