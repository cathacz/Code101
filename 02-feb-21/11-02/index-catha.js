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
    // > method lives inside an object
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

// ------------------------ isDivisible function explained
// divisible % remainder NOT dividable /

// ----------------------------------------------------------------------------------------- for in object
// if you want all properties of that object
for (let prop in konne) {
  console.log(`konne.${prop} : ${konne[prop]}`);
}

let family = [
  ["Resi", 34, "biologist"],
  ["Matthias", 48, "writer"],
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
// ----------------------------------------------------------------------------------------- .forEach(arr)
// = a callback function
console.log("===== forEach() =====");
family.forEach((arr) => arr.forEach((element) => console.log(element)));
// ---------------------------------------------------------------------------------------------for of arr
for (let [key, val] of Object.entries(konne)) {
  console.log(`${key}: ${val}`);
}

console.log("===== assignments =====");

// Create a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function Product(productName, price, inventory) {
  this.productName = productName;
  this.price = price;
  this.inventory = inventory;

  this.printOut = function () {
    console.log(
      `There are ${this.inventory} ${this.productName} in storage with a price of ${this.price}€ each.`
    );
  };
}
let pepsi = new Product("Pepsi", 2.33, 2232);
pepsi.printOut();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const car = {
  modelName: "Mustang",
  modelNumber: 1976,
  engineCapacity: 4,
  get carFacts() {
    console.log(
      `Model: ${this.modelName}, Year: ${this.modelNumber}, Engine stuff: ${this.engineCapacity}`
    );
  },
  set carFacts(str) {
    let arr = str.split(" ");
    //console.log(arr);
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.engineCapacity = arr[2];
  },
};

car.carFacts;
car.carFacts = "Käfer 1938 9";
car.carFacts;

const pet = {
  petName: "Mister Fuzzy",
  species: "cat",
  age: 3,
  lifeExpectancy: 16,
  get petFacts() {
    console.log(
      `${this.petName} is a ${this.species} and might live for another ${
        this.lifeExpectancy - this.age
      } years.`
    );
  },
  set petFacts(obj) {
    //let arr = str.split(" ");
    //console.log(arr);
    this.petName = petName;
    this.species = species;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  },
};
pet.petFacts;
pet.petFacts;
pet.petFacts;

function Pet(petName, species, age, lifeExpectancy) {
  this.petName = petName;
  this.species = species;
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
}

console.log("===== End Assignment =====");
// ------------------------------------------------------------------------------------------------- class
// className always capitalized

class Animals {
  // lass parameter ALWAY with _underscore
  constructor(_kind, _hometown, _petName) {
    // constructor = method from JavaScript
    this.kind = _kind;
    this.hometown = _hometown;
    this.petName = _petName;
  }
  // instances properties after constructor
  display() {
    console.log(
      `This very cute ${this.kind} lives in ${this.hometown} and listens to the name ${this.petName}`
    );
  }
}

const dog = new Animals("Schnauzer", "Leipzig", "Schnauzi");
dog.display();
const cat = new Animals("Hauskatze", "Salzburg", "Mister fuzzy Boots");
cat.display();

cat.displayAge = () => {
  // cat is a normal object and it can be added whatever
  console.log("old cat");
};
cat.displayAge();
// object vs class
// class creates templates with create new Objects, template won't be changed, if object will be changed
// object changes will effect original object

class Color {
  constructor() {
    this.name = "";
    this.tep = 0;
  }
}

const red = new Color();
console.log(red); // uses default value

red.name = "red";
red.tep = 232;
console.log(red); // now it is filled

// TV App

class TV {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  set increaseVolume(inVo) {
    let add = inVo.split(" ");
    this.volume += add[0];
  }
  decreaseVolume(deVo) {
    return this.volume - deVo;
  }
  reset(channel, volume) {
    return (_channel = 1), (_volume = 10);
  }
}
const newTv = new TV("Samsung", 999, 22);
//newTv.brand = "Sony";
newTv.increaseVolume = 40;
newTv.decreaseVolume(10);
console.log(newTv);
