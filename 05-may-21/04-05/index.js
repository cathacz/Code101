const result = document.querySelector(".result");
const form = document.querySelector("form");
const header = document.querySelector("h1");
const msg = document.querySelector(".msg");
const done = document.querySelector(".done");
const close = document.querySelector(".close");
const changeColor = document.querySelector(".changeColor");
// const showMsg = ()=>

function newUser() {
  result.innerHTML +=
    "Hej there, you are back! I am happy to see you again!<br/>";
}

function winDownLoad() {
  // alert("hej");
  // setInterval(newUser, 5000);
}

function redBG() {
  this.style.backgroundColor = "tomato";
}
function whiteBG() {
  this.style.backgroundColor = "whitesmoke";
}

const start = () => {
  header.addEventListener("mouseenter", redBG);
  header.addEventListener("mouseleave", whiteBG);
};
const stop = () => {
  header.removeEventListener("mouseenter", redBG);
  header.removeEventListener("mouseleave", whiteBG);
};
function showMsg(str) {
  done.style.display = "block";
  msg.innerHTML = str;
}

function hide() {
  const close = document.querySelector(".close");
  close.parentElement.style.display = "none";
}

window.addEventListener("load", winDownLoad);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.querySelector("#userData").value;
  //no reload of the page
  showMsg(`${userInput} is a beautiful color`);
});
form.addEventListener("reset", () => {
  showMsg("All gone now!");
});
changeColor.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.backgroundColor = "tomato";
});
