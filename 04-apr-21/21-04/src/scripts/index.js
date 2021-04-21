// pop-up message

// window.alert("Hello");

// let username = window.prompt("your name would be?");
// console.log(username);

function change() {
  console.log(window.document.getElementById("main"));

  window.document.getElementById("main").outerHTML =
    "<h1 id='main'> Hi this is new text form Js</h1>";
  let headerText = window.document.getElementById("main");
  console.log(headerText);
  headerText.style.backgroundColor = "orange";
}
function multiply() {
  let userNum = document.querySelector("#num").value;
  let userMulti = document.querySelector("#multiplier").value;
  // console.log(userNum);
  let resultText = "";

  resultText += `${userNum} ☘️ ${userMulti} = ${userNum / userMulti} <br>`;

  document.querySelector(".result").innerHTML = resultText;
}
function gimmeSqrt() {
  let userNum = document.querySelector("#sqrt").value;

  // console.log(userNum);
  let resultText = "";

  resultText += `the Squareroot from ${userNum} is ${Math.sqrt(userNum)} <br>`;

  document.querySelector(".result").innerHTML = resultText;
}

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4
// SumOfNumbers.

// const findVowels = (str) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let arr = str.toLowerCase().split("");
//   let result = 0;
//   console.log(arr);
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i].includes(vowels[i])) {
//       result += 1;
//     }

//     return result;
//   }
// };
// console.log(findVowels("Here are some vowels"));

const findVowels = (str) => {
  let arr = str.split("");
  let result = 0;
  let vowels = "aeiou";
  console.log(arr);
  for (let i = 0; i <= arr.length; i++) {
    if (vowels.includes(arr[i])) {
      result += 1;
    }
  }
  return result;
};
console.log(findVowels("this is a string"));
console.log(findVowels("Here are some vowels"));

// SumOfNumbers.
// Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
// const sumOfNum =(arr) =>{

// }
let arr = [3, 5, 9, 12];
const reducer = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reducer);

// I forgot how much js sucked
