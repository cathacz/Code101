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

  resultText += `${userNum} ☘️ ${userMulti} = ${userNum * userMulti} <br>`;

  document.querySelector(".result").innerHTML = resultText;
}
