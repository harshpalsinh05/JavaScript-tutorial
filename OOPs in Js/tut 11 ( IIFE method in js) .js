console.log(" tut 11 - IIFE method in js ")

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(332)
        }, 2000)
    })
}

// IIFE immediately invoked function expressions si js function that runs as soon ad it is defined
/* it syntax is :
    (function() {
        ....
        ....
    }) ();

    it is used to avoid polltuing the global namespace, execute an async-await, etc
*/
(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()
