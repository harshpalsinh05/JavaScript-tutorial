console.log("tut 54  Introduction to Promises ")

/* the sol'n to the callback hell is promises. A promise is a "Promise of code execution". 
The code either executes or fails, in both the cases the subscriber will be notified. 
the syntax look like :- 
let promise = new Promise(funtion(resolve, reject){
   //code to execute
})
resolve & reject are two callbacks provides by js itself
resolve(value) -> If the job is finished successfully
reject(errror) -> If the job fails  */

let promise = new Promise((resolve, reject) => {
   console.log("hello")
   resolve(56)
   reject(20)
})
console.log("hello 1")
setTimeout(() => {
   console.log("hello 2")
}, 2000);
console.log("hello 3")
console.log(promise)

/* The promise object returned by the new Promise constructor has these properties
1. State : Initially pending, but then changes to "fulfilled" when resolve is called or it
   changes to "rejected" when reject is called
   
2. Result : Intitsilly undefined, then changes to "value" if resolved(resolve value is called) or
   changes to "error" when rejectd(reject error is called)
*/

