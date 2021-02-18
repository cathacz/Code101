// FYI: JavaScript = scripting Language – not programming language

console.log("===== ERROR =====");
// 3 types of errors >> compilation aka compiler fails to compile, runtime, logic

// try catch will find the runtime errors but not the parse errors like typo or syntax problem
// most errors come from other places like working with data base or server internal issue

//       `try {...} catch (e) {...}` >>> can't find logical errors

//      try >>> to test a block of code
//      catch >>> to handle error
//      throw >>> to create a custom error message
//      finally >>> to execute a code after try regardless of the result

// Logical Error
let userAge = 25;
if (userAge == 24) {
  console.log("ja Mann");
}
// Runtime Error
let userName = "";
try {
  //color(); // not defined
  if (userName == "") throw "Need your stupid name";
} catch (error) {
  console.log("it's an error: " + error);
} finally {
  console.log("FINALLY will run anyway"); // will be executed anyway – error or no error
}
console.log("hej"); // will be executed although "color" is not defined

function print() {
  console.log("easy function");
}
//                                 in milliseconds 100 = 1 sec
//const timerDisplay = setTimeout(print, 500);
const timerDisplay = setTimeout(() => console.log("stuff"), 500);

console.log("me first");
