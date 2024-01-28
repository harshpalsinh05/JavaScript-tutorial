console.log("tut 59 Async and Await functions in js")

// there is a special syntax to work with promises in js
/* function can be made async by using "async" Keyword like this 
    async function harry() {
        return 7; 
    }
    an async function always returns a promise. other values are
    wrapped in a promise automatically. like this
    harry().then(alert)
    so, async ensures that the function returns a promise and wraps non promises in it.

*/
async function harsh() {
    return true
}

harsh().then((x) => {
    console.log(x)
})


async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 5000)
    })

    // usally we do like this to get the value 
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)

    /* but we use awsit method to wait the js until promises retutrns
    the wait works only inside async functions
        let value = await promise;
    the await keyword makes js wait until the promise settles and returns its value
    */
    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)

    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)

    return [delhiW, bangaloreW]
}
 
let a = harry()
// console.log(a) // it will show a promise 
a.then((value) => {
    console.log(value)
})

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let c = await harry()
    let b = await cherry()

}
 main1()

//  the await is just a more elegant syntax of getting the promise result than
//  promise.then() + its easier to read and write  

