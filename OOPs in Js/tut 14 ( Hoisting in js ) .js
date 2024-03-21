console.log("tut 14 - Hoisting in js")

// hoisting refers to the process where the interpreter appers to move the declaration to the top of the code before execution.
// variables can thus be referenced before they are declared in js

console.log(a) // it will print undefined

get()
function get() {
    console.log("hello")
}

var a = 9
// js only hoist Declarations, not initialization. The variable will be undefined until the line where its initialized is reached

console.log(a) // Declaration hoisted to the top but initialization is not, so here it will print the value of "a" 

// --------------------------------------------------------------- //

// hoisting with let and var is different

console.log(b)
console.log(c)
let b = 9
const c = 0
// here above the console b and c will give errer beacuse the delclaration in done in the top but it will not initialized

// ---------------------------------------------------------------- //
got()
// use var, let or const it will show an an error alawys
var got = funtion() {
    console.log("hello")
}

let got = funtion() {
    console.log("hello")
}

const got = funtion() {
    console.log("hello")
}
// funtion expressions and class expressions are not hoisted


/* !IMPORTENT
 Hoisting is an unknown or overlooked behavior of js.
 If a developer doesn't understand hoisting, programs may contain bugs(errors).
 To avoid bugs, always declare all variable at the beginning of every scope.
 */

