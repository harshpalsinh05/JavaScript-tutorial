console.log("tut 19 use of loop in arrays")
//thi is common method to print loop in array
let arr = [2, 3, 1, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log("\t")


// 1st method for array loop method is forEach loop
/* cosnt a = [1,2,3]
a.forEach( (value, index, array) => {
    function or logic
})
*/
console.log("Use of for Each loop in array")
arr.forEach((value) => {
    console.log(value * value) //here it will do like [2*2, 3*3*3 , 1*1, 4*4*4*4, 5*5*5*5*5]
})
console.log("\t")


// 2nd method is Array.from is used to create an array from any other object
console.log("this loop is use to create an array from any other object")
let name = "Harsh"
console.log(name, "is a", typeof name)
console.log("-> converting above string to Array")
console.log("\t")

let ant = Array.from(name)
console.log(ant)
console.log("-> here the Harsh is converted to ", typeof ant)
console.log("\t")


// 3nd method is for-of loop can be used to get the "values" from an array
console.log("this loop is used to get the values from an array") // it is fast method instead of using classic loop for printing values
for (let i of arr) {
    console.log(i)
}
console.log("\t")


// 4nd method is for-in loop can be used to get the "keys" from an array
console.log("this loop is used to get the Keys from an array")
for (let it in arr) {
    console.log(it) //it will print the keys of the array [2,3,1,4,5] which is [2 = 0(keys), 3 = 1, 1 = 2, 4 = 3(keys), 5 = 4]
}
console.log("\t")