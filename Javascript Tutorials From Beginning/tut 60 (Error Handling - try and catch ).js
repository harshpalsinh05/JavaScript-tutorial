console.log("tut 60 Error Handling - try and catch ")

/* Sometimes oour script can have errors and usually a program halts when an error occurs.
 the "try....catch" syntax allow us to catch errors so that the script instead of dying 
 can do some things more reasonable

 the try catch syntax has two main blocks :
 try and another is catch
 
 try {
    console.log(has)
 } catch(error){  (here the error variable contains an error object)
    // handling error
 }
 
 first the code in try is executed, if there is no error then catch is ignored
 else catch is executed if there is an error in the code
*/


setTimeout(() => {
    console.log("Hacking wifi.... Please wait...")
}, 1000)

try {
    console.log(rahul)
}
catch (err) {
    console.log(err)
    console.log("Balle balle" + err)
}

setTimeout(() => {
    console.log("Fetching username and password.... Please wait...")
}, 2000)

setTimeout(() => {
    console.log("Hacking Rahul's facebook id.... Please wait...")
}, 3000)

setTimeout(() => {
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait...")
}, 4000)

/*
try catch works synchronously, so if an execution happens in 
scheduled code, like in setTimeout, then try...catch will not 
work and wont catch it - 

try{
    setTimeout (() =>{
        //error code  (here the script dies and catch wont work)
    })
}
catch(err){ ..}

thats because the function itself is executed later, when the engine
has already left the try...catch contruct
*/

try {
    setTimeout(() => {
        console.log(hey)
    },1000)
}
catch(err){
    console.log(err)
}