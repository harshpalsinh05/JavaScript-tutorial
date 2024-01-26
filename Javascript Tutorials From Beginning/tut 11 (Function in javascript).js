console.log(" 11 Function in Javascript");
/* a javascript function is a block of code designed to perform a particular task
    funtion myFunc(){
        code to be executed
    }
    funtion harsh(parameters 1, parameter 2){
        code to be executed
    }
*/

console.log("-> find the average of he given number using a functions")
function average(x, y, z, a){
    return (x + y + z + a) / 4
        console.log("Done")
}

let a = 3
let b = 1
let c = 6
let d = 4

console.log("Average of a, b, c, d is ", average(a,b,c,d))

function bash(x,y) {
    return (x + y) /2
    console.log("Done")
}
console.log("Average of a and b is ", bash(a,b))
console.log("Average of b and c is ", bash(b,c))
console.log("Average of c and d is ", bash(c,d))
console.log("Average of d and a is ", bash(d,a))

// for the modern Javascript the function is written as : -
console.log("-> use of mordern javascript function")
const hello = () => {
    console.log("Hey how are you ?")
    return "i am fine"
}
hello(); //if it has no return value

let h = hello()
console.log(h)

console.log("-> how to add 2 number using function")
const sum = (p, q) => {
    return p + q
}
console.log(sum(90, 40))
