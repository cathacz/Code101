// where I can link my js file

// window.alert === alert

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// Node tree https://dom.spec.whatwg.org/#concept-node

const container = document.querySelector(".container");
console.log(container);

const spanList = document.querySelectorAll(".container span");
console.log(spanList);

spanList.forEach((span) => {
  span.innerHTML = "Penis";
  span.style.backgroundColor = "salmon";
});
spanList[2].style.backgroundColor = "olive";

const menu = document.querySelector("#menuList");
console.log(menu);
// const highlight = document.querySelector(".highlight");

const highlight = document.querySelectorAll("li[class='highlight']");
highlight[0].style.backgroundColor = "tomato";

const moreClasses = document.querySelector(".main");
moreClasses.classList.add("text");
moreClasses.classList.add("small");
moreClasses.classList.add("big", "large");

moreClasses.classList.remove("text");

let classArr = ["classOne", "classTwo", "classThree"];
moreClasses.classList.add(...classArr);
console.log(moreClasses.classList);
moreClasses.style.fontSize = "2.3rem";
moreClasses.style.color = "olive";
moreClasses.style.cssText = "font-family = monospace; border: solid 2px black";

const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector("body").style;
  console.log(mood);
  if (mood) {
    body.backgroundColor = "hotpink";
  } else {
    body.backgroundColor = "sandybrown";
  }
};
