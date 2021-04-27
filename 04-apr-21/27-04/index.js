// Change the font of the body element.
const body = (document.querySelector("body").style.fontFamily = "Arial");
//long way// other way:
// const body = document.querySelector("body");

// body.style.fontFamily = "Arial";

//----------------------- Center the text of h1 on the page.
const title = document.querySelector(".title");
title.style.textAlign = "center";

const mainSec = document.querySelector(".main");
mainSec.style.display = "flex";
mainSec.style.flexFlow = "row wrap";
mainSec.style.justifyContent = "space-around";
mainSec.style.boxSizing = "border-box";

//--------------------------The menu headings have a class named category. Select the elements by class name. Then, change the color and font-style of each element.
// an array of objects
const category = document.querySelectorAll(".category");
// selects the item and then directly the style
category.forEach(({ style: cat }) => {
  cat.fontSize = "2rem";
  cat.fontStyle = "italic";
  cat.border = "1px solid lightcoral";
  cat.padding = "1rem 1rem 0 1rem";
});
// cat is a replacement – saves time...
// ------------------other way:
// category.forEach(({ style }) => {
//     style.fontSize = "2rem";
//     style.fontStyle = "italic";
//     style.border = "1px solid lightcoral";
//     style.padding = "1rem 1rem 0 1rem";
//   });
//Create a function named "colorGenerator" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of food-category. Give each list a different background color using the function that you created.
const colorGen = () => {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  // one more thing
  result += "50";
  return result;
};

// color generator in other way 😉
const colorGenOtherWay = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
};

// Select all even allergy-info items. Give the even items a different background color.
const food = document.querySelectorAll(".food-category");
food.forEach(({ style: item }) => {
  item.backgroundColor = colorGen();
  // item.backgroundColor = colorGenOtherWay();
  item.width = "30%";
  item.height = "10rem";
  item.textAlign = "center";
});
// Make the allergy-warning appear as a column in the center of the page.
const allergy = document.querySelectorAll(".allergy-info:nth-child(even");
allergy.forEach(({ style: item }, i) => {
  item.backgroundColor = colorGen();
});
const allergySec = document.querySelector(".allergy-warning").style;
allergySec.display = "flex";
allergySec.flexFlow = "column";
allergySec.justifyContent = "center";
allergySec.alignItems = "center";
//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.
const footer = document.querySelector(".footer").style;
footer.display = "flex";
footer.flexFlow = "row wrap";
footer.justifyContent = "center";
footer.alignItems = "center";
const foodItems = document.querySelectorAll(".food-desc");

const media = window.matchMedia("(max-width: 400px)");

foodItems.forEach(({ style }) => {
  style.border = "solid 1px coral";
  style.margin = "1rem";
  style.padding = "1rem";
  style.borderRadius = "50%";
  if (media.matches) {
    //mobile
    style.flexflow = "column";
    style.backgroundColor = "coral";
  } else {
    style.backgroundColor = "olive";
    style.flexflow = "row";
    //desktop
  }
});
