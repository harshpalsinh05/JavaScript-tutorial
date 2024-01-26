console.log("tut18 methods in array part 2");
console.log("\t");

//7th method, delete will delete an array element using this delete operator
console.log("#7 delete will delete an array element using this delete operator")
let h1 = [1, 33, 25, 6, 436]
delete h1[1]
console.log(h1)
//delete operator will not afact the length of the arrays, it will remain same asit was before
console.log(h1.length)
console.log("\t");


//8th method, .concat() is used to join an arrays to the given array
console.log("#8 .concat() is used to join an arrays to the given array")
let h2 = [2, 42, 34, 363, 56, 1, 536, 67]
let H1 = h1.concat(h2)
console.log(H1)
console.log("\t");


//9th method, .sort() method is used to sort an array alphabetically
console.log("#9 .sort() method is used to sort an array alphabetically")
h2.sort()
console.log(h2) //It will sort the element like [1 , 12, 13, 123, 124]. 
console.log("\t");

//sort is also used to change the order in acending and desending order using a compare function
console.log("desending order")
const compare = (a, b) => {
    return a - b  // for desending order
}
h2.sort(compare)
console.log(h2)
console.log("\t");


console.log("asending order")
const Compare = (a, b) => {
    return b - a // for asending order
}
h2.sort(Compare)
console.log(h2)
console.log("\t");

//10th method, .reverse() will used to reverses the element in he source array.
console.log("#10 .reverse() will used to reverses the element in he source array")
let h = [95, 24, 46, 34, 3, 5]
console.log(h)
h.reverse()
console.log(h)
console.log("\t");


//11th method, .splice() is used to add new items to an array
// .splice( postion to add new array , numbers of element to be removed from the array, element which you want add )
console.log("#11 .splice is used to add new items to an array")
console.log(h)
h.splice(3, 3, 44, 444, 4444, 44444, 444444)
console.log(h)
console.log("\t"); 

let deletedvalue = h.splice(0, 1, 2)
console.log(h, deletedvalue) //it will return the deleted value in the array
console.log("\t"); 


//12th method, .slice() is used to slice out a piece from an array, and it creates a new array
console.log("#12 .slice() is used to slice out a piece from an array, and it creates a new array")
console.log(h)
let newh = h.slice(3)
console.log("slice from above array", newh)
let nh = h.slice(1,6)
console.log("slice from above array", nh)

console.log("\t"); 