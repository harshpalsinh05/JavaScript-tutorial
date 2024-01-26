console.log("tut 07 Conditional Experssions");
let age = prompt("Hey What's your age?");
console.log(typeof age);
age = Number.parseInt(age); // It will convert the datatype of age from string to Number
console.log(typeof age); //now it will show the datatypes as Number

/* if condition */

if (age > 0) {
  alert("this is an valid age");
}

/* if else conditon */
if (age > 0) {
  alert("This is an Valid age");
} 
else {
  alert("This is an invalid age");
}

/* if elseif else condition */
if (age < 0) {
  alert("This is an invalid age");
}
else if (age <= 9) {
  alert("You are a Kid, So you cannot even think of driving");
}
else if (age < 18 && age > 9) {
  alert("You are a teenager, So first go to Driving school and learn driving and then drive after 18")
}
else {
  alert("You Can Now Drive As You Are Above 18 age");
}
console.log("Thank You");

// This is a ternary Operator
console.log("You Can", (age <= 18 ? "Not Drive" : "Drive"));

// Switch statement and switch cases
let Ages = prompt("Hey Find your School Section by entering your Age?");
Ages = Number.parseInt(Ages);

switch (true) {
  case (Ages >= 0 && Ages <= 4):
    alert("You are Just a Babyyy");
    break;

  case (Ages >= 5 && Ages <= 9):
    alert("You are in Junior Section of School");
    break;
  case (Ages >= 10 && Ages <= 16):

    alert("You are in Seniar Section of School");
    break;

  default:
    alert("Enter valid Ages");
}



console.log("-> question 1 - Write a JavaScript program that displays the largest integer among two integers");
let aa = 45;
let bb = 25;

if (aa>bb) {
  console.log("the larger integer from " + aa + " and " + bb + " is " + aa ); 
} else if (bb>aa) {
  console.log("the larger integer from  " + aa + " and " + bb + " is " + bb ); 
} else {
  console.log("the values are " + aa + " and " + bb + " are equal "); 
}

console.log("-> question 2 - Write a JavaScript conditional statement to find the sign of the product of given three numbers");
let x = 4;
let y = -8;
let z = 0;


if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}


console.log("-> question 3 - Write a JavaScript conditional statement to sort three numbers");
let xx = 0;
let yy = -1;
let zz = 4;

if (xx > yy && xx > zz) {
    if (yy > zz) {
        console.log(xx + ", " + yy + ", " + zz);
    } else {
        console.log(xx + ", " + zz + ", " + yy);
    }
} else if (yy > xx && yy > zz) {
    if (xx > zz) {
        console.log(yy + ", " + xx + ", " + zz);
    } else {
        console.log(yy + ", " + zz + ", " + xx);
    }
} else if (zz > xx && zz > yy) {
    if (xx > yy) {
        console.log(zz + ", " + xx + ", " + yy);
    } else {
        console.log(zz + ", " + yy + ", " + xx);
    }
} 

console.log("-> question 4 - Write a JavaScript conditional statement to find the largest of five numbers");
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;

if (a > b && a > c && a > d && a > e) {
  console.log(a);
} else if (b > a && b > c && b > d && b > e) {
  console.log(b);
} else if (c > a && c > b && c > d && c > e) {
  console.log(c);
} else if (d > a && d > c && d > b && d > e) {
  console.log(d);
} else {
  console.log(e);
} 

console.log("-> question 5 - ")