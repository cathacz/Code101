// Traversing
//  Node vs Element Nodes
const ele = document.querySelector("#second").previousElementSibling;
const ele2 = document.querySelector("body").previousSibling;
console.log(ele);
console.log(ele2);
// firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText);
// nodeName, nodeType, id, innerText
let text = document.querySelector("span");
let closestEle = text.closest(".cool");
console.log(closestEle);
// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType list, 1: div, p. 8: comment
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

// closest

// matches

// querySelector
