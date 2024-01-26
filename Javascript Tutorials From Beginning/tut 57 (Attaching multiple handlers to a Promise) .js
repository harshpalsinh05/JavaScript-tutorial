console.log("tut 57 Attaching multiple handlers to a Promise ")

let p1 = new Promise((resolve, reject) => {
    console.log("Hey I am not resolved")
    setTimeout(() => {
        resolve(1);
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 6000)
    })
}).then((value) => {
    console.log(value)
})

p1.then(() => {
    console.log("Congratulations this promise is now resolved")
})


