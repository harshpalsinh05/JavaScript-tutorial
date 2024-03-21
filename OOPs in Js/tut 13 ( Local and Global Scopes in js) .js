console.log("tut 13 - Local, block and Global Scopes in js")

/* let & const provide block level of scope which means that
the variable declared inside a{} cannot be accessed from 
outside the block 
*/

let a = 45
function a() {
    console.log(a)

    let b = 56
    console.log(b)

    var c = 312
    console.log(c)
}
// variable declared withen a js function, become local to the function
// variable declared outside a funtion, become global

a()
console.log(a)
console.log(c)
console.log(b)

