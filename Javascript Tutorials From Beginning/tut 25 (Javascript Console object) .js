console.log("tut 25 Javascript Console Object")

//it will show you all the object 
// console.log(console)

// #1 assert
// console.assert(5>55)// IT will show assertion is failed
// console.assert(5544>5) //It will not throw any errors

// #2 clear 
// console.clear() //it will clear the console

// #3 table
Object = {a:1, b:2, c:3, d:4 }
console.table(Object) // it will created a table 

// #4 warn
console.warn("Hey PLs Do not do that") // It will give you a warnnig in yellow line background

// #5 error
console.error("It is wrong") /// It will give you an error in red line background

// #6 info
console.info("IT IS IMPORTANT") //It will show you the important in console

// #7 time and timeEnd
console.time("nice")
console.timeEnd("nice") // it will show you the time of runtime

console.time("forloop")
for ( let i=0; i<5; i++){
    console.log(233)
}
console.timeEnd("forloop")// It will shoe you the end time of the loop  


console.time("whileloop")
let i = 0
while(i<5){
    console.log(233)
    i++
}
console.timeEnd("whileloop")// It will shoe you the end time of the loop