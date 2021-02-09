console.log("===== Conditional Algorithms =====");
console.log("1. Los or New?");

// * Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.
function nameOfCity(cityName) {
  const first3char = cityName.substring(0, 3).toLowerCase();
  if (first3char == "new" || first3char == "los") {
    return cityName;
  } else {
    return "The city name does not begin with Los or New";
  }
}
console.log(nameOfCity("New York"));
console.log(nameOfCity("Boston"));

console.log("2. isDivisible?");

// * Create a function named "__". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.

const isDivisible = (num) => num % 100 == 0;
console.log(isDivisible(1));
console.log(isDivisible(1000));

console.log("4. What's the weather?");

// * Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "__". If false, print "__".

const isRaining = (bool) =>
  bool
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
console.log(isRaining(true));
console.log(isRaining(false));

console.log("===== Loops =====");
console.log("1. Sequence");

// * Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

const geometricalSequence = () => {
  let str = "";
  for (let i = 1; i <= 256; ) {
    if (i == 1) {
      str += i;
      i += i;
      continue;
    }
    str += `${i} `;
    i += i;
  }
  return str;
};
console.log(geometricalSequence());
console.log("2. Multiples");

// * Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

console.log("===== Math =====");
console.log("1. You've got the power");

// * Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
//     > **Examples**:
//     - ```javascript
//         powerOf(3) //27
//         ```

//     - ```javascript
//         powerOf(4) //256
//         ```
console.log("===== Problem Solving =====");
console.log("1. How many?");

// * Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
//     > **Examples**:
//     - ```javascript
//       vowelCount("hello") // 2
//       ```
//     - ```javascript
//       vowelCount("test") // 1
//       ```
//     - ```javascript
//       vowelCount("fbw") // 0
//       ```
