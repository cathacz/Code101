// >>> process Object:

// console.log(process);
// console.log(process.argv);
// console.log(`Hej ${process.argv[2]}`);
process.argv.forEach((item, i) => {
  console.log(`${i}: ${item}`);
});
// remember and do this:
// const args = process.argv.slice(2);
// console.log(args);

// >>> fs (File System) built-in module in NodeJS

const fs = require("fs");

// >>> Read file

fs.readFile("./text.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// >>> Write file

fs.writeFile(
  "./newText.txt",
  "my new text file, created with NodeJS",
  function (err) {
    if (err) throw err;
    console.log("Done");
  }
);

fs.writeFile(
  "./anotherText.txt",
  "so I created another File with a meaningless Text inside...",
  function (err) {
    if (err) throw err;
    console.log("There you go");
  }
);
fs.readFile("./anotherText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

const args = process.argv.slice(2);
let stars = args[0];
let header = args[1];
const print = require("./star");
print(stars, header);

//  >>> Calculator
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}
function parsNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number. Start over.`);
    process.exit();
  }
  return number;
}
// more advanced then let stars = args[1]:
const [operation, ...rest] = args;
const numbers = rest.map(parsNum);
// sum 2 4 f

// avg 89 64 98787 0 29292

function med(numArray) {
  switch (operation) {
    case "sum":
      console.log(sum(numArray));
      break;
    case "avg":
      console.log(avg(numArray));
      break;
    default:
      console.log("Nope!");
  }
}
med(numbers);
