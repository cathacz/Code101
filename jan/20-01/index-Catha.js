// ways to initialize arrays

// best way (so far) --------------------------------------------------------------
const arr1 = [];
arr1.push("cat");
console.log(arr1);
const arr2 = ["dog", "mouse"];

//new array with the NEW-method -------------------------------------------------  new

const arr3 = new Array(); // Capital A (Object) > initialize empty NEW array

console.log(arr3);

// const str1 = new String();
// console.log(str1);

// const num1 = new Number();
// console.log(num1);

//making a new array -------------------------------------------------------------- .of
const arr4 = Array.of(1, 3, 8, 48, 92);
console.log(arr4);

// sorting items in an array (by using UTF-16 code)-------------------------------- .sort
let alpha = ["c", "r", "w", "m", "C", 8, "%"];
let sortAlpha = alpha.sort();
console.log(sortAlpha); // order: special char., numbers, capitals, smalls

// to reverse an array > first is last and last is first -------------------------- .reverse
let revArr = [2, 3, 88, 9, 7]; //> [7, 9, 88, 3, 2]
let revArrRev = revArr.reverse();
console.log(revArrRev);
console.log(typeof revArrRev); //answer: object

// tells me true or false if it is an array --------------------------------------- .isArray()
let bool = Array.isArray(revArr);
console.log(bool);

//will start searching backwards (-1 means nothing found) ------------------------- .lastIndexOf()
const arr5 = ["you", "go", "home", "you", "loser"]; // will never show the first "you"
console.log(arr5.lastIndexOf("you"));
console.log(arr5.indexOf("you"));
//.indexOf would gives you the first "you"

// adds item(s) to array ----------------------------------------------------------- .fill()
let arr6 = [22, 55, 7, 78, 99, 125, 2456];
let newArr6 = arr6.fill(101, 1, 3); // (what, from, to) replaces existing items
// fill(what, from)>> replaces from position "from" all remaining items
console.log(newArr6);

// ========================================================= -1 means always nothing found
