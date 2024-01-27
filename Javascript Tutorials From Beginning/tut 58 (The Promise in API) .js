console.log("tut 58 The Promise API")

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 2")
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
})

p1.then((value) => {
    console.log(value)
})

p2.then((value) => {
    console.log(value)
})

p3.then((value) => {
    console.log(value)
})

// use of .all(promises), it will print all the value at the same time
// but if there is any reject(error) in the promise , .all([promises]) will not work
let allpromise = Promise.all([p1, p2, p3])
allpromise.then((value) => {
    console.log(value)
})

// /////////////////////////////////////////////////////////////////////////////////////////////////
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(20);
    }, 1000);
})

let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 5")
    }, 2000);
})

let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 6")
    }, 3000);
})

p4.then((value) => {
    console.log(value)
})

p5.then((value) => {
    console.log(value)
})

p6.then((value) => {
    console.log(value)
})

//  use of .allSettled(promises), it will returns the result as an array 
// of objects with there statues and value (also when there is an error)
let allsettled = Promise.allSettled([p4, p5, p6])
allsettled.then((value) => {
    console.log(value)
})

// use of .race(promises), it will return the first promise to settle &
// its result/error becomes the outcome
let all_race = Promise.race([p1, p2, p3])
all_race.then((value) => {
    console.log(value)
})

let allrace = Promise.race([p4, p5, p6])
allrace.then((value) => {
    console.log(value)
})

// use of .any(promises), it will return the first promise to 
// fulfill(and not rejected) and its result become outcome
let anypromise = Promise.any([p4, p5, p6])
anypromise.then((value) => {
    console.log(value)
})

// use of .resolve(value)
let promise_all = Promise.resolve(6)
promise_all.then((value) => {
    console.log(value)
})

// use of .reject(error)
let promisereject = Promise.reject(new Error("Hey"))
promisereject.then((value) => {
    console.log(value)
})
