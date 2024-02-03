console.log("tut 66 Fetch API in JavaScript")

/*
js can be used to send and retrive information form the network when needed
Fetch API - It is used to get data over the network

let promise = fetch(url,[options]) //(without options, a get request is sen)

getting a response is in a 2-stage process
1. an object of response class containing "status" & "ok" properties
->  status = the http status code, like for eg. 200
->  ok = boolean, true if the http status code is between 200-299 else false 

2. after that we need to call another method to access the body in different formats:
->  response.text() = read and return the text
->  response.json() = parse the response as Json
there are other methods include response.formData(), response.blob(), etc

!!! important note -> we can use only one body reading method.
eg. if we have already got the response with response.text() then response.json() wont work, it will show error.

=> Response Headers = they are available in response headers
=> Request Headers = to set a request header in fetch, we use the headers option
 let response = fetch( url {
    headers: {
        Authentication : 'anykey'
    }
 })
*/

let p = fetch('https://jsonplaceholder.typicode.com/posts')
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value2) => {
    console.log(value2)
})


let newp = fetch('https://jsonplaceholder.typicode.com/posts')
newp.then((response) => {
    // console.log(response.text()) // here it will show error
    return response.json()
}).then((response) => {
    console.log(response)
})