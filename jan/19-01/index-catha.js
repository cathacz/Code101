const nam = ["Lieschen", "Resi", "Matthias", "Konstantin"];
const sym = ["§", "%", "&", "/"];
console.log(nam.length); // to get number of elements in an array (human counting)
console.log(nam[nam.length - 1]); // to access the last item

let cityName = [];
console.log(cityName.length);
cityName[1] = "Salzburg"; //create item to array !overwrites existing items!
console.log(cityName);

let ciNa = [];
console.log(ciNa.length);
ciNa[0] = "Salzburg";
ciNa[1] = "Graz";
ciNa[2] = "Innsbruck";
console.log(ciNa);
ciNa.push("Wien"); // adds item after last item ----------------------------- .push
console.log(ciNa);

ciNa.pop(); //removes last item --------------------------------------------- .pop
console.log(ciNa);
let removedItem = ciNa.pop(); //store removed items in new variable
console.log(ciNa);
console.log(removedItem);

ciNa.unshift("Bregenz"); //adds an item to first position ------------------- .unshift
console.log(ciNa);
ciNa.shift(); //removes first item ------------------------------------------ .shift
console.log(ciNa);
let remIT = ciNa.shift();
console.log(ciNa);
console.log(remIT);

//const nam = ["Lieschen", "Resi", "Matthias", "Konstantin"];
console.log(nam.indexOf("Resi")); // counts js style ------------------------ .indexOf

let pos = nam.indexOf("Matthias"); // number – which position will be removed
console.log(pos);
let n = 2; //how many items will be removed
let removed = nam.splice(pos, n); // ---------------------------------------- .splice
console.log(removed);
console.log(nam);

nam.splice(0, 1); // removed 1 item on position 0 (Lieschen)
console.log(nam);

//need new friend (old ones have been removed 😞)
nam.push("Sarah");
nam.unshift("Max");
nam[3] = "Marco";

console.log(nam);

for (let i = 0; i < nam.length; i++) {
  console.log(nam[i]);
}
//.split > splits strings into arrays
let str = "hej there, it's me – did you miss me?";
let newArr = str.split(" "); //needs a criteria (case sensitive) ----------- .split
let newArrLen = str.split(" ").length;
console.log(newArrLen);
console.log(newArr);
//.join > joins arrays to strings together
let newStr = newArr.join(" "); // needs criteria as well ------------------- .join
console.log(newStr);

//.concat > merges two (or more) arrays

let arr1 = [1, 34, 578];
let arr2 = [84, 91, 747];

let arr3 = arr1.concat(arr2); //-------------------------------------------- .concat
console.log(arr3);

arr3 = arr1.concat(arr2, [666, 667, 668]);
console.log(arr3);

//. slice > makes a shallow copy
let fakeCopy = nam; // called reference  – if you push eg it also changes original (nam)
console.log(fakeCopy); // alt+ d >> highlights all similar words

let shallowCopy = nam.slice(); //------------------------------------------- .slice
console.log(shallowCopy);
shallowCopy.push("Horst"); // only adds in shallow copy not in the original
console.log(shallowCopy);
console.log(nam);

const dest = ["Bali", "Mount Everest", "Las Vegas", "New York", "Loch Ness"];
console.log(dest);
let copyDest = dest.slice(1, 2);
console.log(copyDest);
