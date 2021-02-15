console.log("===== Loops && Switch Cases");
// ============================================================================================== for-loop

for (let i = 0; i <= 5; i++) {
  //declare i (let i = 0) just in this loop
  // increment part (i++) happens always in the end >> after console.log
  console.log(i);
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 5; i++) {
  if (i <= 1) {
    console.log(`there is ${i} star in the night sky`);
  } else {
    console.log(`there are ${i} stars in the night sky`);
  }
  if (i % 2 == 0) {
    console.log(`twinkle, twinkle little star`);
  }
}
console.log(`----------------------------------- next loop`);

for (let i = 5; i > 0; i--) {
  console.log(`${i} is a number`);
}
console.log(`----------------------------------- next loop`);

for (let i = 1; i <= 10; i++) {
  console.log(`this is a multiplication table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${j} * ${i}= ${i * j}`);
  }
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is an EVEN number`);
  }
  /* else {
      console.log(`${i} is an ODD number`);
    }*/
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(`${i} is an ODD number`);
  }
}

console.log(`----------------------------------- next loop`);
let draw = "";
for (let i = 0; i <= 4; i++) {
  draw = "";
  for (let j = 0; j <= i; j++) {
    draw += " +";
  }
  console.log(draw);
}
console.log(" +".repeat(6));
for (let i = 0; i <= 4; i++) {
  draw = "";
  for (let j = 5; j > i; j--) {
    draw += " +";
  }
  console.log(draw);
}
console.log(`----------------------------------- next loop`);
for (let i = 0; i <= 5; i++) {
  draw = "";
  if (i < 5) {
    for (let j = 0; j <= i; j++) {
      draw += " *";
    }
    if ((i = 5)) {
      draw = draw.repeat(6);
    }
  }
  console.log(draw);
}

//"return" (is for functions) in loops is a way to exit – better use >break<

//something else...  I guess Arrays

const nam = ["Catha", "Konstantin", "Matthias"];
const work = [" a WebDeveloper", "looking for Work", "a writer"];
for (let i = 0; i < nam.length; i++) {
  console.log(`Hej I am ${nam[i]} and I am ${work[i]}`);
}

const img = ["img1", "img2", "img3"];
const likes = [36, 822, 123];

for (let i = 0; i < img.length; i++) {
  console.log(`
      ===============
         ${img[i]}             
         ❤ ${likes[i]}         
      ===============
      `);
}

// console.log ("check: ", check) (check1 + check2) >> keep code clean!

// ========================================================================================= switch case
// user input SWITCH CASE
// use switch case if there is a wide range of possible "IF"s
console.log(
  "whats your favorite color? ----------------- a switch case example"
);
let color = "black";

switch (
  color //not a function   NO return – we have break
) {
  case "pink":
    // isLogged = false;  >> more code possible
    console.log("pink sucks"); // truthy part
    break;
  case "yellow":
    console.log("yellow is alright"); // truthy part
    break; // needed after every case to exit case if its true
  case "green":
    console.log("I like green too"); // truthy part
    break;
  case "black":
    console.log("❤ black is my favorite too ❤"); // truthy part
    break;
  default:
    // is a nice way to tell users stuff (what you actually want from them)
    console.log("my rainbow looks different colors than yours");
}

console.log("How many Kids do you have? ----------------- another example");
let howManyKids = 17;

switch (howManyKids) {
  case 0:
    console.log("lucky you");
    break;
  case 1:
    console.log("you have 1 child");
    break;
  case 2:
    console.log("you have 2 children");
    break;
  case 3:
    console.log("you have 3 children");
    break;
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
    console.log("you have too many children");
    break;
  default:
    console.log("your uterus broke or you are insane");
}

// do & while are kind of a loop >> but dizygotic twins
// ---------------------------------------------------------------------------------------------------- do
// with do – we do it at least one time!

let counter = 0; //v declare counter outside loop
do {
  // if false (eg counter = 20) will ignore the do part and just print out counter ONE time
  console.log(counter);
  counter++;
  let count = 0;
  //   do {
  //     console.log("nested " + count);
  //     count++;
  //   } while (count <= 2);
} while (counter <= 10); // stops when condition reached

// ------------------------------------------------------------------------------------------------- while
// if condition not full-filled while ignores loops – you get nothing

let loopOne = 0;
while (loopOne < 5) {
  loopOne++; //adds up before printing out
  console.log(loopOne);
}

//more conditions possible with do-loop (than for-loop)

// =========================== -1 means ALWAYS nothing found =============================================
// ================== NO returns in loops (return belong in functions)====================================
