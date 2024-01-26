// nn bb ss u - NULL NUMBER BOOLEAN BIGINT SYMBOL STRING UNDEFINED (this all are primitive datatypes)
console.log("js primitives and Objects")
//Primitives datatypes in Js
let a = null; //NULL
let b = 516; //NUMBER
let c = true;// true or false (BOOLEAN)
let d = BigInt("6") + BigInt("4") //BIGINT
let e = "Harry"; //STRING
let f = Symbol("I am Symbol"); //SYMBOL
let g = undefined; //UNDEFIEND
console.log(a, b, c, d, e, f, g)

console.log(typeof f) //IT will tell you that what is the type of datatypes is that ? =

//Objects in Js
//objects in js are - Non primitive datatypes  
const item = {
  "Hary": true,
  "Harshpal": null,
  "Harsh": false,
  "Harshit": 45
}
console.log(item["Harsh"]) //it will show you the value of that const
console.log(item["Hary"]) 
console.log(item["rishi"]) // it will show you undefined for this const because rishi doesn't exists in that objects 