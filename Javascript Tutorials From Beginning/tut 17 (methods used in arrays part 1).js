console.log("tut17 methods of array part 1");
console.log("\t");

// 1st method, .toString() convert Array to string
console.log("#1 to change a Arrays to String we use .toString method")
let H1 = [32, 432, 234, 7, 42]
console.log(H1)
console.log(typeof H1);
console.log("\t");

let H2 = H1.toString() //it will convert the upper arrays to string
console.log(H2);
console.log(typeof H2);
console.log("\t");

// 2nd method, .join() will join something with the array or string
console.log("#2 to join something in the array or in the string we can use .join() method")
let H3 = H1.join("+");
console.log(H3, " The type is", typeof H3);
console.log("\t");

//3rd method, .pop() removes last element from the array
console.log("#3 .pop is use to removes last element from the array ")
H1.pop() //it will remove the last element which is "42" in H1 array
console.log(H1)
console.log("\t");

let h3 = [1, 2, 3, 4, 5, 6]
let r = h3.pop() // here the .pop() will return the element which has removed from the arrays above
console.log(h3, r) // so here the r = 6
console.log("\t");

//4th method, .push() adds a new element at the end of the array
console.log("#4 .push is use to adds a new element at the end of the array")
//push returns the new array length
let p = h3.push(44)
console.log(h3, p) // p represent the new array length
console.log("\t");

//5th method, .shift() remove the first element and returns it
console.log("#5 .shift will remove the first element and returns it")
let s = h3.shift()
console.log(h3, s) // here s is the first element removed from the array
console.log("\t");

//6th method, .unshift() add the first element at the beginning and returns new array length
console.log("#6 .unshift will add the first element at the beginning and returns new array length")
h4 = [1, 1, 2, 2,]
let us = h4.unshift(1)
console.log(h4, us) // here un will return the length of the new array
console.log("\t");

