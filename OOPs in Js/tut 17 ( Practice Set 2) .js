console.log("tut 10 - Practice Set 2")

const a = async (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000);
    })
}

(
    async () => {
        let text = await a("HELLO")
        console.log(text)
        text = await a("WORLD")
        console.log(text)
    }
)()

// ----------------------------------------------------------- //

function sum(a, b, c) {
    return a + b + c
}

let x = [1, 7, 7]
console.log(sum(...x));

// ----------------------------------------------------------- //

const b = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000 * n);
    })
}

(
    async () => {
        let text = await b("I am resolving after 1sec", 1)
        console.log(text)
        text = await b("I am resolving after 4sec", 4)
        console.log(text)
    }
)()

// ----------------------------------------------------------- //

function simpleintrest(v,i ,t){
    return v*i*t/100
}
console.log(simpleintrest(5000, 8, 20))