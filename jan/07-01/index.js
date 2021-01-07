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
