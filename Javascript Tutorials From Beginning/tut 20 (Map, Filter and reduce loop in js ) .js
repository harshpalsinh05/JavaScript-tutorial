console.log("tut 20 use of Map, Filter and Reduce loop in arrays")

//1nd method .map() is used to create a new array by performing some operation on each array element
/* cosnt a = [1,2,3]
a.forEach( (value, index, array) => {
    return value * value;
})
*/
console.log("\t")
console.log("-> MAP() method is use to create a new array by performing some operation on each array element")
let arr = [14, 25, 77, 45]
let a = arr.map((value, index, array) => {
    console.log("\t")
    console.log("value - ", value, "|index - ", index, "|array - ", array)
    return value + index
})
console.log("\t")
console.log("-> the sum of value and index will be", a, ". This is a new array created by the map() method")
console.log("\t")


//2nd method .Filter() is used to filter an array with values that pass a test and then creates a new array
/* const a1 = [1,2,3,4,5,6,7,8]
let a2 = a1.filter ((greater_than_5) => {
    retuen a<5 ;
})
console.log(a1)
*/
console.log("-> FILTER() method is used to filter an array with values that pass a test and then creates a new array")
const a1 = [1, 2, 3, 4, 5, 6, 7, 8]
let a2 = a1.filter((less_than_5) => {
    return less_than_5 < 5;
})
console.log("\t")
console.log("-> A new array will be created from the filtered value which will be -", a2, "and the a1 will remain the same as it was ", a1) //the a1 array will not be changed it will remain the same as it was, only a new array will be created from a1.
console.log("\t")


//3nd method .reduce() is used to reduce an array to a single
console.log("-> REDUCE() method is used to reduce an array to a single")
let b = [4, 84, 24, 7, -23]
let newb = b.reduce((h1,h2)=> {
    return h1 + h2 ; 
/* here it will work like first the h1 = 4 & h2 = 84 then it do sum = 88,
   then again the h1 = 88 & h2 = 24 then again sum = 112 then repeat the function for whole array value
*/
})
console.log(newb)
console.log("\t")