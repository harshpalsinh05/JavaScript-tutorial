console.log("tut 61 the error object & custom errors")

/*
for all the build in errors, the error object has two main properties:
try{
    hey; (error variable not defined)
} catch(err) {
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}
*/

try {
    hey //error variable not defined)
} catch (err) {
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}

// We can throw our own custom error by using this syntax
try {
    let age = -25 //prompt("Enter Your Age")
    age = Number.parseInt(age)
    if (age > 100) {
        throw new Error("this is not posiable")
    } else if (age < 0) {
        throw new SyntaxError("this not true")
    }
} catch (err) {
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}

// we can also throw a particular error by using the build in constructor for standard errors;



