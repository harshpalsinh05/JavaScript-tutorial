console.log("tut 12 - Desturcturing assignment & spread operator")

// Desturcturing assignment is used to unpack values from an arrays, or properties from objects, into distinct variables
let arr = [1, 2, 3, 4, 5, 53, 46, 7, 8]

// if we want to like a = [1], then we do like this 
//  let a = arr[0]
//  let b = arr[1]
// but now there is no need to do that , we have a better way to do that
let [a, b, c, d, e] = arr
console.log(a, b, c, d, e)

// and for the rest of that arr we can use "rest"
let [a, b, c, d, e, ...rest] = arr
console.log(a, b, c, d, e, rest)

// and some times, if we don't want to assign a number which is in between the array we can to like this
let [a , , , ...rest] = arr
console.log(a, rest)
// here we have not assign any var to the value of 2,3,4, so it will not return 

// we can so make a arrays like this and gave then a var
let [x,y,z] = [235,46435,234]
console.log(x,y,z)

// similarly we can Desturcture objects on the left hand side of the assignment\
let obj = {h:1 , g: 5}
let {h, g} = obj
console.log(h, g)

let {l, j} = {l:1, j:23}
console.log(l,j)

// --------------------------------------------------- //
/* spread operator
it allows an iterable such as an array or string to be expanded in places where zero
or more arguments are expected. In an object literal, the spread syntax numerates the properties
of an object and adds the key value pairs to the object being created.
*/

let arr1 = [1, 23, 24, 56]
let obj1 = {...arr1}
console.log(obj1)

function sum(h, g, j, k){
    return h+g+j+k ;
}

console.log(sum(...arr1))
// ------------------------------------------- //

let obj2 = {
    name: "Harry",
    company:"Horizontal",
    address:"Airport circle"
}

// now we wan to override the value inside the obj2 we can do this 
console.log({ ...obj2, name:"Harsh"}) // !important is that the object should be first retrun then override the value inside the object


// we you will do this nothing is going to change inside the obj2 object, but it will not show an error also !important
console.log({ name:"Harsh", ...obj2}) 