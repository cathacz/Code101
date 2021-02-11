// Destructuring objects as function parameters
//                 Parameter–NO object >>default value
function fun(num, { name = "new" }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}

fun(2, { name: "Catha" });

// getter && setter must be inside an object
// ------------------------------------------------------------------------------------------------ getter
// ------------------------------------------------------------------------------------------------ setter
// use set & get together – both with same name: get xx() & set xx()

const userData = {
  firstName: "Matthias",
  lastName: "Thiele",
  age: 48,
  single: false,

  get fullName() {
    // > getter
    console.log(
      `${this.firstName} ${this.lastName} ${this.age} ${this.single}`
    );
  },
  set fullName(str) {
    // > setter
    let arr = str.split(" ");
    //console.log(arr);
    this.firstName = arr[0];
    this.lastName = arr[1];
    this.age = arr[2];
    this.single = arr[3];
  },
};
userData.fullName; // getting the object data
userData.fullName = "Catha Czipf 33 true"; // filling the object
userData.fullName; // getting new data

// ------------------------------------------------------------------------------------------- constructor
// Create a "Template" with a constructor function
//      capitalized function name
function Person(name, age, act) {
  this.name = name;
  this.age = age;
  this.act = act;
  this.printOut = function () {
    console.log(
      `Hej ${this.name}, you are ${this.age} and you are interested in ${this.act}`
    );
  };
}

let resi = new Person("Resi", 34, "running");
console.log(resi);
resi.printOut();

let konne = new Person("Konstantin", 32, ["Yoga", "eating"]);
konne.printOut();

// ----------------------------------------------------------------------------------------- for in object

// ------------------------------------------------------------------------------------------- forEach arr

// ---------------------------------------------------------------------------------------------for of arr
