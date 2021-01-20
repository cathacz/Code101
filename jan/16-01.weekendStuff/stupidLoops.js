let x = "x";

const drawSomething = () => {
  for (i = 0; i <= 4; i++);
  let result = +x * i;
  return result;
};
console.log(drawSomething());

const numbersCount = () => {
  for (let i = 0; i <= 5; i++) {
    let text = "";
    for (let j = 1; j <= i; j++) {
      text += j;
    }
    console.log(text);
  }
};
numbersCount();

const numbersCount2 = () => {
  let text;
  for (let i = 5; i >= 0; i--) {
    text = "";
    for (let j = 1; j <= i; j++) {
      text += j;
    }
    console.log(text);
  }
};
numbersCount2();

//Romans stupid thing

/*
Hi @everyone A tiny task, if you have a desire to study a little on the weekend:smile:
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).*/
//Create a function that returns whether the first array is slightly superior to that of the second.
//Worked Example
// isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.
/*Examples
isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false    */
/*Notes
Both arrays will be the same length.
All values and their counterparts will always be of the same data type.
If the two arrays are the same, return false.*/

const array1 = [1, 2, 3];
const array2 = [1, 2, 7];

const isSuperior = () => {
  for (i = 0; i <= array1.length; i++) {
    if (array1[i] <= array2[i]) {
      return console.log(`true`);
    } else {
      return console.log(`nagl dia a gurkal ins knie`);
    }
  }
};

isSuperior(); // 🙄 plus ahhhhhhhhhhhhhhh
