console.log("===== Arrays =====");
// ============================================================================================ array = []
//array >> !! alway [] !!
//              0         1            2
const arr = ["Catha", "Matthias", "Konstantin"];
console.log(arr[2]); // >> Konstantin
let arrNum = 1;
console.log(arr[arrNum]); // >> Matthias
arrNum++; //adds 1 to arrNum
console.log(arr[arrNum]); // >> Konstantin

const NumArray = [19, 84, 20, 16, 39, 932, 198, 2, 23, 8373, 71];
console.log(NumArray[NumArray.length - 1]); // 71 >> last item in array

// more array STUFF

const namen = ["Lieschen", "Resi", "Matthias", "Konstantin"];
const sym = ["§", "%", "&", "/"];
console.log(namen.length); // >> 4 >> to get number of elements in an array (human counting)
console.log(namen[namen.length - 1]); // >> Konstantin >> to access the last item

let cityName = [];
console.log(cityName.length); // >> 0
cityName[1] = "Salzburg"; //create item to array !overwrites existing items!
console.log(cityName); // >> [<1 empty item>, 'Salzburg] >> didn't define [0], started with [1]

let ciNa = [];
console.log(ciNa.length);
ciNa[0] = "Salzburg";
ciNa[1] = "Graz";
ciNa[2] = "Innsbruck";
console.log(ciNa);
// =============================================================================================== .push()
// adds item after last item
ciNa.push("Wien");
console.log(ciNa);
// ================================================================================================ .pop()
// removes last item
ciNa.pop();
console.log(ciNa);
let removedItem = ciNa.pop(); //store removed items in new variable
console.log(ciNa);
console.log(removedItem);
// ============================================================================================ .unshift()
//adds an item to first position
ciNa.unshift("Bregenz");
console.log(ciNa);
// ============================================================================================== .shift()
// removes first item
ciNa.shift();
console.log(ciNa);
let remIT = ciNa.shift();
console.log(ciNa);
console.log(remIT);

const nam = ["Lieschen", "Resi", "Matthias", "Konstantin"];
// ============================================================================================ .indexOf()
// gives the index number of item
// counts js style (starting from 0)
console.log(nam.indexOf("Resi"));

// ======================================================================================= .splice(pos, n)
// removes items from array; pos = index number, n = how many items will be removed
let pos = nam.indexOf("Matthias"); // number – which position will be removed
console.log(pos);
let n = 2; //how many items will be removed
let removed = nam.splice(pos, n);
console.log(removed);
console.log(nam);

nam.splice(0, 1); // removed 1 item on position 0 (Lieschen)
console.log(nam);

//need new friend (old ones have been removed 😞)
nam.push("Sarah");
nam.unshift("Max");
nam[3] = "Marco";

console.log(nam);

for (let i = 0; i < nam.length; i++) {
  console.log(nam[i]);
}
// ============================================================================================== .split()
// splits strings into arrays
let stri = "hej there, it's me – did you miss me?";
let newArr = stri.split(" "); // needs a criteria (case sensitive)
let newArrLen = stri.split(" ").length;
console.log(newArrLen);
console.log(newArr);
// =============================================================================================== .join()
// joins arrays to strings together
let newStr = newArr.join(" "); // needs criteria as well
console.log(newStr);

// ============================================================================================= .concat()
// merges two (or more) arrays

let arr1 = [1, 34, 578];
let arr2 = [84, 91, 747];

let arr3 = arr1.concat(arr2);
console.log(arr3);

arr3 = arr1.concat(arr2, [666, 667, 668]);
console.log(arr3);

// ============================================================================================== .slice()
//makes a shallow copy
let fakeCopy = nam; // called reference  – if you push eg it also changes original (nam)
console.log(fakeCopy); // alt+ d >> highlights all similar words

let shallowCopy = nam.slice();
console.log(shallowCopy);
shallowCopy.push("Horst"); // only adds in shallow copy not in the original
console.log(shallowCopy);
console.log(nam);

// --------------------------------- ways to initialize arrays -------------------------------------------

// ------------------------------------------------------------------------------------ best way (so far)
const arr11 = [];
arr1.push("cat");
console.log(arr11);
const arr22 = ["dog", "mouse"];

// --------------------------------------------------------------------------------------------------- new
//new array with the NEW-method
const arr33 = new Array(); // Capital A (Object) > initialize empty NEW array

console.log(arr33);

// const str1 = new String();
// console.log(str1);
// const num1 = new Number();
// console.log(num1);

// --------------------------------------------------------------------------------------------------- .of
//making a new array
const arr4 = Array.of(1, 3, 8, 48, 92);
console.log(arr4);

// =============================================================================================== .sort()
// sorting items in an array (by using UTF-16 code)
let alpha = ["c", "r", "w", "m", "C", 8, "%"];
let sortAlpha = alpha.sort();
console.log(sortAlpha); // order: special char., numbers, capitals, smalls

// ============================================================================================ .reverse()
// to reverse an array > first is last and last is first
let revArr = [2, 3, 88, 9, 7]; //> [7, 9, 88, 3, 2]
let revArrRev = revArr.reverse();
console.log(revArrRev);
console.log(typeof revArrRev); //answer: object

// ============================================================================================ .isArray()
// tells me true or false if it is an array
let boolie = Array.isArray(revArr);
console.log(boolie);

// ======================================================================================== .lastIndexOf()
//will start searching backwards (-1 means nothing found)
const arr5 = ["you", "go", "home", "you", "loser"]; // will never show the first "you"
console.log(arr5.lastIndexOf("you"));
console.log(arr5.indexOf("you"));
//.indexOf would gives you the first "you"

// =============================================================================================== .fill()
// adds item(s) to array
let arr6 = [22, 55, 7, 78, 99, 125, 2456];
let newArr6 = arr6.fill(101, 1, 3); // (what, from, to) replaces existing items
// fill(what, from)>> replaces from position "from" all remaining items
console.log(newArr6);
