console.log("tut 3(var vs let vs const)")
// var a = 45;
var a = 4;
let b = "Harsh";
b = 4; //it will run perfectly & gives "b" a value = 4 instead of "Harsh" because we have last edited the value from Harsh to 4.

const tur = "Harsh"
// tur = 5 //It will gives an error beacuse constant cannot be changes

let c = null;
let d = undefined;
{
  let b = "this"
  console.log(b)
}
console.log(a, b, c)
console.log(d)
