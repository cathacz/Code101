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

/* cleaning optimization app  >> daily cleaning challenge
breaking down shores in shorter "in between" tasks (5 minutes max.)

user enters sqm apartment, chooses room, chooses all-round shores, chooses specific shores, chooses once-in-a-while shores, can specify own shores, chooses how many shores per day

>> room (kitchen, bathroom, hall way, bedroom) >>default; rooms can be added living room, balcony
>> assign all-round shores (fighting chaos, vacuuming, wiping floor, dusting, collect item that belong in a different room, ...)
>> assign specific shores to rooms (cleaning toilet, washing dishes, ...)
>> assign once-in-a-while shores (cleaning windows, changing sheets...)

app chooses random shore to do in a specified time range (eg 1 week) repeats // doesn't show shore accordingly to frequency

user can ask app so choose for them or enter full filled shores to cross out of algorithm 

everything is clean – everybody is happy

*/
