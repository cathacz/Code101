// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4
console.log("================== 1ST ASSIGNMENT ==================");

// alway do .toLowerCase wit the input string/array
const findVowels = (str) => {
  let result;
  let splt = str.split("");
  //console.log(splt);
  let count = 0;
  for (let i = 0; i < splt.length; i++) {
    if (
      splt[i] == "a" ||
      splt[i] == "e" ||
      splt[i] == "i" ||
      splt[i] == "o" ||
      splt[i] == "u"
    ) {
      count += 1;
    }
  }
  result = count;
  return result;
};
console.log(findVowels("in your face – I f***ing did it")); //not case sensitive
console.log(findVowels("this is a string"));

// ===== check ou Hadis solution later =====

// No Duplicates!
//  A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
console.log("================== 2ND ASSIGNMENT ==================");

console.log("----- the second assignment gave me a headache -----");

const noDup = (arr) => {
  let result;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i++]) {
      newArr.push(arr[i]);
    }

    result = newArr;
  }
  return result;
};
console.log(noDup([1, 4, 4, 7, 7, 7]));
console.log(noDup([1, 6, 6, 9, 9]));
console.log(noDup([2, 2, 2, 2, 2, 2]));
console.log(noDup([5, 10, 15, 20, 25]));

// ===== Hadis solution for Duplicates ======

const cleanUp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      //! if it is NOT included- add it
      result.push(arr[i]);
    }
  }

  return result;
};
console.log(cleanUp([1, 4, 4, 7, 7, 7]));
console.log(cleanUp([1, 6, 6, 9, 9]));
console.log(cleanUp([2, 2, 2, 2, 2, 2]));
console.log(cleanUp([5, 10, 15, 20, 25]));

// Dictionary. (take your time on this pls ) also as tip you can use .includes()
//  Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []

console.log("================== 3RD ASSIGNMENT ==================");

const dictionary = (str, arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      result.push(arr[i]);
    }
  }

  return result;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// Hadi's Attempt

// const dic = (str, arr) => {
//   let result = [];
//   let userInput = str.toLowerCase();
//   for (let i = 0; i < arr.length; i++) {
//     let currentValue = arr[i].toLowerCase;
//     if (currentValue.includes(userInput)) {
//       result.push(currentValue);
//     }
//   }
//   return result;
// };
// console.log(dic("bu", ["button", "breakfast", "border"]));
// console.log(dic("tri", ["triplet", "tries", "trip", "piano", "tree"]));
// console.log(dic("beau", ["pastry", "delicious", "name", "boring"]));

// second attempt

// const dic2 = (str, arr) => {
//   let result = [];
//   let userInput = str.toLowerCase();
//   for (let i = 0; i < arr.length; i++) {
//     let currentValue = arr[i].toLowerCase;
//     let shot = currentValue.substring(0, str.length);
//     if (shot == userInput) {
//       result.push(currentValue);
//     }
//   }
//   return result;
// };
// console.log(dic2("bu", ["button", "breakfast", "border"]));
// console.log(dic2("tri", ["triplet", "tries", "trip", "piano", "tree"]));
// console.log(dic2("beau", ["pastry", "delicious", "name", "boring"]));

// both not working! "something.something is not a function"
