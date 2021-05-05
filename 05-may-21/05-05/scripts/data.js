const obj = [
  {
    name: "Catha",
    age: 34,
    city: "Leipzig",
  },
  {
    name: "Matthias",
    age: 49,
    city: "Leipzig",
  },
  {
    name: "Konstantin",
    age: 32,
    city: "Leipzig",
  },
];
// step 1 >> Object into JSON
let data = JSON.stringify(obj);

export default data;
