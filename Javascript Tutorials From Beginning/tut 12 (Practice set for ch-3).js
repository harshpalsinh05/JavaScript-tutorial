console.log("tut12 chapter - 3 practice question");
// question - 1
console.log("-> Q1");

// by using only for loop
console.log("by using only for loop");
let marks = {
  yash : 98,
  Aash : 58,
  takash : 9
}

for( let i=0; i<Object.keys(marks).length; i++){
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// question - 2
console.log("-> Q2");
// by using for-in loop
console.log("by using only for-in loop");
let obj = {
  harshpal: 90,
  harsh: 49,
  subh: 30,
  shiv: 67,
  kushi: 18
}
for (let key in obj) {
  console.log("Marks of " + key + " are " + obj[key]);
}


// question - 3
console.log("-> Q3");
// it is solved by using while loop
let cn = 9;
let i
while (i != cn){
  console.log("Try Again");
  i = prompt ("enter a number");
}
console.log("you have entered a correct number");

// question - 4
console.log("-> Q4");
// make a function to find a mean of 5 number
let a = 3;
let b = 5;
let c = 12;
let d = 89;
let e = 34;
const mean = (a, b, c, d, e) =>{
  return (a+b+c+d+e)/5;
}
console.log("mean of these 5 number will be " + mean(a,b,c,d,e));

