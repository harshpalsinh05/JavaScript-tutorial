console.log("tut 21 chapter -5  practice Question");
// Q1
console.log("Question 1");
//use of .push method 
let arra = [4, 6, 43, 47, 5, 67]
let aa = prompt("Enter a Number to Add in Array")
console.log(typeof a) //here the "a" is in the string , we will conver the string into the number
aa = Number.parseInt(aa)
arr.push(aa)
console.log(arr, "\t")

// Q2 
console.log("Question 2");
//use of do-while loop 
let arr = [4, 6, 43, 47, 5, 67]
let a;
do {
    a = prompt("Enter a Number to Add in Array")
    console.log(typeof a) //here the "a" is in the string , we will conver the string into the number
    a = Number.parseInt(a)
    arr.push(a)
} while (a != 0)
console.log(arr, "\t")

// Q3
console.log("Question 3");
// use of filter method to filter the divisible by 10 numbers only
let b = [10, 100, 40, 55, 235, 374]
let newb = b.filter((div_by_10) => {
    return div_by_10 % 10 == 0
})
console.log(newb, "\t")

// Q4
console.log("Question 4");
//1st method - use of forEach loop 
let c = [2, 5, 6, 8, 9, 22]
c.forEach((value)=> {
    console.log(value*value)
})

//2nd method - use of map() method
let newc = c.map((value) => {
    return value*value
})
console.log(newc)

// Q5
console.log("Question 5");
//calculate the factors of number
let newcc = c.reduce((h1,h2) => {
    return h1*h2;
})
console.log(newcc)