// >>> process Object:

// console.log(process);
// console.log(process.argv);
// console.log(`Hej ${process.argv[2]}`);
process.argv.forEach((item, i) => {
  console.log(`${i}: ${item}`);
});
// remember and do this:
const args = process.argv.slice(2);
console.log(args);

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
