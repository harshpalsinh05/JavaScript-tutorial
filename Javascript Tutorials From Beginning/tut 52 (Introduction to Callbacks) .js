console.log("tut 52 introduction to callbacks ")

//Syncronous action are the actions that initiate and finish one-by-one
//It is an eg. of Syncronous Programming 
let a = prompt("What is your name")
let b = prompt("What is your age")
let c = prompt("What is your gender")
alert(a + " is " + b + " years old and the gender of " + a + " is " + c + ".")

//Asynchronous actions are the actions that we initiate now & they finish later.
//It is an eg. of Asynchronous programming
alert("Start")
setTimeout(() => {
    alert("It will run later onwards")
}, 3000);
alert("End")

//CAllBACK FUNCTIONS
/* a callback funtion is a function passed into another function as an argument,
which is then invoked inside the outer function to complete an action. */
// eg of callback
// 1st method
/* function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = () => callback(script)
    document.head.append(script)
} */
// 2nd method\
/* loadScript ('https://styleshout.com/free-templates/kards/', (script) => {
    alert('script is loaded')
    alert(script.src)
}) */

function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("Loaded script with SRC: " + src)
        callback(src);
    }
    document.body.appendChild(script)
}

function HELLO(src) {
    alert("Hello")
}

loadScript("https://styleshout.com/free-templates/kards/", HELLO)

/* this is called callback-based style of Asynchronous programming.
A function that does something Asynchronously should provide a callback 
argument where we put the function to run after it complete */

// now we will learn to handle errors
/*  function loadScript(src, callback) {
    // code
    script.onload = () => callback(null, src)
    script.onerror = () => callback(new Error('failed'))
    // code
} // then inside the loadScript call :

loadScript('cdn/harry', function (error, script) {
    // code
    if (error) {
        // handle error
    } else {
        // script loaded
    }
}) */

function loadScript(src, callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("Loaded script with SRC: " + src)
        callback(null, src);
    }

    script.onerror = function () {
        console.log("there is an error")
        callback(new Error('failed'))
    }

    document.body.appendChild(script)
}

function HELLO(error, src) {
    if (error) {
        console.log(error)
        return
    }
    alert("Hello" + src)
}

loadScript("https://styleshout.com/free-templates/kars/", HELLO)



