let x, y, z;
console.log(x);

function display(str) {
    console.log(str,);
}

x = 4;
y = 5;
z = x + y;
display(z);

display(Math.max(3, 9, 83, x, 99, y, 104));
display(Math.min(3, 9, 83, x, 99, y, 104));

let str = "100.92";
let strIntoNum = parseInt(str, 16); // always use
display(strIntoNum);

let strIntoNum1 = +str; // never use! schlampig & confusing
display(strIntoNum1);

let strIntoNum2 = str * 1; // we don't use 
display(strIntoNum2);

let strIntoFloat = parseFloat(str);
console.log("floaty", strIntoFloat);

display(((x + y) / (z + 2.44)) * 29 + x);

// Number + String
let d, f, r;
d = "C";
f = 33;
r = true;
console.log(d + f);

// Number + Boolean (true = 1, false = 0)
console.log(f + r); // 33 + 1(true) = 34

//string + string

let str1 = "Hej";
let str2 = "Nice Shoes";
console.log(str1 + str2);

// ++ --
let a = 1;
//++ a;
a++;
display(a);
display(++a);

a--;
display(--a);

//typeOf

display(typeof str1);
display(typeof x);
display(typeof console) //object > object orientated language
display(typeof Math.ceil) // function

// 3.444444444444444

let floatNum1 = 0.1;
let floatNum2 = 0.1;
let = result = floatNum1 * floatNum2;
display(result.toFixed(3));

//Math.random
//numbers between 0-100 > * 100 +1 | 101 >>>> just 0-99 = *100
display(Math.floor(Math.random() * 10) + 1);
display((Math.random() * 10).toFixed(2));

// == >>  not equal: != >>

console.log(1 == 1);
console.log(1 == 16);
console.log(1 == 1 && 1 == 9); // true && false = FALSE; true && true = TRUE; false && false = FALSE; 
console.log(1 == 1 || 1 == 9); // true && false = TRUE; true && true = TRUE; false && false = FALSE; 
console.log(1 == 20 || (1 == 1 && 1 != 292)); // false || true && true

let boo1, boo2, boo3;
boo1 = true;
boo2 = false;
console.log(boo1 && boo2 ? "cool" : "not cool");
console.log(boo1 || boo2 ? "cool" : "not cool");

//=== == 
let w = "10";
let v = 10;
console.log(w == v ? "cool" : "not cool"); // type doesnt matter
console.log(w === v ? "cool" : "not cool"); //=== not both same type

console.log(Math.floor(Math.random() * 6) + 1); //Create a program that prints a random integer from 1 - 6.



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        START 

function square(h) {
    return (Math.sqrt(h * h));
}
// display(square(16)); >> testing if it works...

console.log(Math.sqrt(Math.pow(4, 2) + Math.pow(2, 2))); // Pythagoras: a² + b² = c² 

console.log("Sinus90: " + Math.sin(90));

display("Why functions never work");

let alpha = 45;
let h = 1; // Hypotenuse

function sinus() {
    //return sinus = Math.sin(Math.sqrt(Math.pow(h,2)-Math.sqrt(Math.cos(alpha),2)));
    //return sinus = Math.sin(Math.cos(alpha, 2) / Math.pow(h,2));
    return sinus = Math.sin(Math.cos(alpha)/h);
}
console.log(sinus());

display("check: (Sinus Alpha)");
console.log(Math.sin(alpha));
display(">> arcSinus:");
console.log(Math.asin(Math.sin(alpha)));
display("doubleCheck: (Sinus Alpha = tanAlpha * cosAlpha)");
console.log(Math.tan(alpha) * Math.cos(alpha));



display("Sinus");
console.log(Math.sin(Math.sqrt(Math.pow(h, 2) - Math.sqrt(Math.cos(alpha), 2))));
console.log(Math.sin(Math.sqrt(Math.pow(h, 2) - Math.sqrt(Math.cos(1), 2))));

display(">>>>>> new Try");

function gegenkathete(){
    return gegenkathete = Math.sin(alpha) * h;
}
 display("Gegenkathete:" + gegenkathete());


let gk = 4;
let hy = 5;

let sine = Math.sin(gk/hy);
display("SinusAlpha = " + gk/hy);
display(sine);

display(Math.asin(gk/hy));