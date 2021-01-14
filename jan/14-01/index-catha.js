//The WEEKLY Nagger

/*
1. Enter Items to a weekly TO-DO-List
2. Check off Items after they are done or you get nagged
3. Bring not finished Items in next week (brought items will be nagged hard!)
*/

/*
const item = [];
const addItem = (str) => {
    let add = item.push();
    return add;
};

console.log(addItem("wash Hair"));
*/

/*item.push("wash hair");

console.log(item);
item.push("wash dishes");
console.log(item);
item.push("drink milk");
console.log(item);
*/

const item = [];

const pushIt = (str) => {
  // add function
  return item.push(str);
};
pushIt("Milk");
console.log(item);
pushIt("Eggs");
console.log(item);

const upDate = [];

const pullIt = (st) => {
  // delete function
  for (let i = 0; i <= item.length; i++)
    if (item.includes(st)) {
      //check if st is on item
      return item.unshift(st); // removes st and adds item to update
    }
  //return item.splice(st);
};

pullIt("ham");
console.log(item);
