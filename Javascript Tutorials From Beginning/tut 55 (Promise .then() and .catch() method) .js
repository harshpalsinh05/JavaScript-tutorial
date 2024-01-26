console.log ("tut 55 Promise .then() and .catch() methods ")

        //The consuming code can recevie the final result of a promise through then and catch
        /* the fundamental syntax for .then is
            promise.then( functiom(result) => { handle },
            function(error) => { handle error}
            ); */

        // use of .then when promise is true and there is no error
        let p1 = new Promise((resolve, reject) => {
            console.log("the promise is pending")
            setTimeout(() => {
                console.log("I am a Promise and i am Resolved")
                resolve(true)
            }, 3000);
        })

        p1.then((value) => {
            console.log(value)
        }, (error) => {
            console.log(error)
        })

        // use of .then when promise is not true and has an error
        let p2 = new Promise((resolve, reject) => {
            console.log("the promise is pending")
            setTimeout(() => {
                console.log("I am a Promise and i am Rejected")
                reject(new Error("I am an error"))
            }, 3000);
        })

        p2.then((value) => {
            console.log(value)
        }, (error) => {
            console.log("some error is occured in p2 variable")
        })

        // the .catch is use to get the error
        p2.catch((value) => {
            console.log(value)
        })

        // .finally(()=>{}) is used to perform general cleanups
