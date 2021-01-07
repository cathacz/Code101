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
r=true;
console.log(d+f);

// Number + Boolean
console.log(f+r);
