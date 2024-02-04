console.log("tut 67 Sending POST request with Fetch API in JavaScript")

/*
to make a post request, we need to use fetch options
1. method -> Http-method, eg POST
2. body -> the request body   
*/

let options = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
}
fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => response.json())
    .then((json) => console.log(json))


const createTodoo = async () => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'Harry3',
            body: 'bhai2',
            userId: 1100,
        })
        // JSON.stringify will convert the js object to string
        // JSON.parse will convert the valid JSON string into the javascript object 
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const mainFuncn = async () => {
    let todo = await createTodoo()
    console.log(todo)
}
mainFuncn()

// 
const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
        //JSON.stringify will convert the js object to string
        //JSON.parse will convert the valid JSON string into the javascript object 
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        title: 'Harry2',
        body: 'bhai2',
        userId: 1100,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
}
mainFunc()