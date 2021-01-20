// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// Create an if statement which prints the name and BMI of the person with the highest BMI.

const higherBMI = (kg, m) => {
  bmi = kg / (m * m);
  return `Your BMI is ${bmi}`;
};

console.log(higherBMI(68, 1.75));
console.log(higherBMI(95, 1.98));

let mark = [68, 1.75];
let john = [95, 1.98];
const checkBMI = () => {
  //f u
};
// Hadi's solution: (stupid and really not efficient)
const markH = 1.65;
const markM = 85;
const johnH = 1.9;
const johnM = 120;

let markBMI = markM / (markH * markH);
let johnBMI = johnM / (johnH * johnH);

let bool = markBMI > johnBMI;

console.log(bool);
console.log(`Is Mark’s BMI higher than John’s? It’s ${bool}`);

// More conditions
// Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”.

let firstName = "Matthias";
let age = 13;
const status = (firstName, age) => {
  if (age <= 13) {
    console.log(`${firstName} is a child`);
  } else if (age >= 13 && age <= 20) {
    console.log(`${firstName} is a teenager`);
  } else if (age >= 20 && age <= 30) {
    console.log(`${firstName} is a young adult`);
  } else {
    console.log(`${firstName} is an adult`);
  }
};
status("Peter", 8);
status("Konstantin", 19);
status("Kurt", 22);
status("Matthias", 48);

// stupid "game"

/* cleaning optimization app  >> daily cleaning challenge (Promodoro-like)
breaking down chores in shorter "in between" tasks (5 minutes max.)

user enters sqm apartment, chooses room, chooses all-round chores, chooses specific chores, chooses once-in-a-while chores, can specify own chores, chooses how many chores per day

>> room (kitchen, bathroom, hall way, bedroom) >>default; rooms can be added living room, balcony
>> assign all-round chores (fighting chaos, vacuuming, wiping floor, dusting, collect item that belong in a different room, ...)
>> assign specific chores to rooms (cleaning toilet, washing dishes, ...)
>> assign once-in-a-while chores (cleaning windows, changing sheets...)

app chooses random chore to do in a specified time range (eg 1 week) repeats // doesn't show chore accordingly to frequency

user can ask app so choose for them or enter full filled shores to cross out of algorithm 

everything is clean – everybody is happy

*/

//more stupid assignments

// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
let names = ["samuel", "MARIA", "lUkE", "mary"];

const capitalize = () => {
  let capNames = "";
  for (let i = 0; i < names.length; i++) {
    capNames += `${names[i][0].toUpperCase()}${names[i]
      .substring(1)
      .toLowerCase()} `;
  }
  return capNames.split(" ");
};
console.log(capitalize(names)); //ALMOST määäh good enough...

const cap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  return arr;
};
console.log(cap(["samuel", "MARIA", "lUkE", "mary"]));

// City Names.
// Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.

let cities = ["Berlin", "Paris", "Prague", "Rome"];

const citiesInAString = () => {
  let result = "";
  for (let i = 0; i < cities.length; i++) {
    result += `${cities[i]}, `;
  }
  return result;
};
console.log(citiesInAString(cities));

const arrayToString = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i == arr.length - 1) {
      str += ".";
    } else {
      str += ", ";
    }
  }
  return str;
};
console.log(arrayToString(["Berlin", "Paris", "Prague", "Rome"]));

// Hello
//  Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
// Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.

let friends = ["Lieschen", "Resi", "Matthias", "Konstantin"];
for (let i = 0; i < friends.length; i++) {
  switch (friends[i]) {
    case "Lieschen":
      console.log(" Hej Lieschen");
      break;
    case "Resi":
      console.log(" Hej Resi");
      break;
    case "Matthias":
      console.log(" Hej Matthias");
      break;
    case "Konstantin":
      console.log(" Hej Konstantin");
      break;
    default:
      console.log("Your are not my friend");
      break;
  }
}

const friendsGreeting = (arr) => {
  str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `Hello ${arr[i]} \n`;
  }
  return str;
};
console.log(friendsGreeting(["Lieschen", "Resi", "Matthias", "Konstantin"]));
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

let zahlen = [3, 5, 2, 4];

const rechnenOderSo = () => {
  let result;
  for (let i = 0; i < zahlen.length; i++) {
    if (zahlen[i] % 2) {
      console.log(zahlen[i] - 1);
    } else {
      console.log(zahlen[i] - 1);
    }
  }
};

console.log(rechnenOderSo(zahlen));

const oddOReven = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      // dont need the == 0
      console.log(arr[i] + 1);
    } else {
      console.log(arr[i] - 1); // make arr[i] into a new variable CLEAN CODE (don't declare variable in loop)
    }
  }
};
oddOReven([3, 5, 2, 4]);
