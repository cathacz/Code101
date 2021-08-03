const fs = require("fs");

fs.appendFile("newText.txt", "a new Text is created here \n", (err) => {
  if (err) throw err;
  console.log("File is created");
});

// >>> read file
fs.readFile("./longText.txt", "UTF8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// >>> read file sync
const data = fs.readFileSync("./longText.txt");
console.log(data.toString());
console.log("reading sync first");

// rename file

// fs.rename("./hello.txt", "./hej.txt", (err) => {
//   if (err) throw err;
//   console.log("rename done");
// });

// >>> delete file

// const filePathName = "./delete.txt";
// fs.unlink(filePathName, (err) => {
//   if (err) throw err;
//   console.log("deleted");
// });

// >>> copy file

fs.copyFile("./original.txt", "./copy.txt", (err) => {
  if (err) throw err;
  console.log("copied");
});

// >>> open file
fs.open("newText.txt", "w", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// fs flags
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
