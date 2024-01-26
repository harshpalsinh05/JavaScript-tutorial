console.log("tut 06 Operators and Expressions in js");
console.log("-> Arthmethic Operators")
let a = 45;
let b = 3;
console.log("a + b =", a + b)
console.log("a - b =", a - b)
console.log("a / b =", a / b)
console.log("a * b =", a * b)
console.log("a ** b =", a ** b) // it will exponential the a res to b - 45*45*45 for this eg.
console.log("a % b =", a % b) //it will show the remaining remainder after 45/3

console.log("a++ =", a++) //it will increase the value by +1 after this step
console.log("a =", a)

console.log("++a =", ++a)//here first it will increase value by +1 and then print it in this step
console.log("a =", a)

console.log("a-- =", a--) //it will decrease the value by -1 after this step
console.log("a =", a)

console.log("--a =", --a) //here it will decrease the value by -1 & then print it in this step
console.log("a =", a)

//Assignment Operators
console.log("-> Assignment Operators")

let a1 = 8;
a1 += 5 // it will do like a1 = a1 + 5 = 8 + 5 = 13
console.log("a1 = ", a1)

a1 -= 10 // it will do like previous a1 = a1-10 = 13-10 = 3
console.log("a1 = ", a1)

a1 *= 10 // it will do like a1 = a1*10 = 3*10 = 30
console.log("a1 = ", a1)

a1 /= 10 // it will do like a1 = a1/10 = 30/10 = 3
console.log("a1 = ", a1)

a1 **= 2 // it will do like a1 = a1 res to 2 = 3x3 = 9 
console.log("a1 = ", a1)

a1 %= 2 //it will tell about the remainder left
console.log("a1 = ", a1)


//comparison Operators
console.log("-> Comparison Operators")

let b1 = 5;
let b2 = 5;
console.log("b1 == b2 is ", b1 == b2) //it will compare b1 and b2, if its equal then it show TRUE
console.log("b1 != b2 is ", b1 != b2) //it will compare b1 and b2, if its not equal then it show TURE

console.log("b1 === b2 is ", b1 === b2) //it will compare the b1 and b2 datatypes,
console.log("b1 !== b2 is ", b1 !== b2) //it will compare the b1 and b2 datatypes,

console.log("b1 > b2 is ", b1 > b2)
console.log("b1 < b2 is ", b1 < b2)
console.log("b1 >= b2 is ", b1 >= b2)
console.log("b1 <= b2 is ", b1 <= b2)

//Logical Operators
console.log("-> Logical Operators")
let x = 5;
let y = 6;
console.log(x < y && x == 5)
console.log(x > y || x == 5)
console.log(!false)