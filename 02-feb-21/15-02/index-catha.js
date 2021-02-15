class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `Hej ${this.name}, I am ${this.age} years old too`;
  }
}

const newBuddy = new Person("Resi", 33);
console.log(newBuddy.printData());

// =============================================================================================== extends
//grabs parent class and inject into current class

class Kid extends Person {
  constructor(_name, _age, _hight) {
    // name && age will be inherit from Person
    super(_name, _age); // super brings it down from Person // =================================== super()
    this.hight = _hight;
  }
  show() {
    return `this is a kid that is ${this.hight} cm hight and ${this.age} years old`;
  }
}

const catha = new Kid("Catha", 13, 168);
console.log(catha.printData());

// ================================================================================================= Date
// always grabs the local time

// UTC Coordinated Universal Time
// GMT Greenwich Mean Time

let time = new Date().getHours(); // Date = Object from JavaScript
// .getFullYear() .getMonth() .getDay() etc to specify
console.log(time);
// alway write fullYear

// extended class ft time >>> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
