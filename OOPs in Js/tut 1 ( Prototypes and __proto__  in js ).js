console.log("tut 1 - Prototypes and __proto__ in js")


let p = {
    name: "Harry",
    language: "Javascript",
    run: () => {
        alert("this is inside the p")
    }
}
console.log(p)

let pt = {
    run: () => {
        alert("this is inside the pt")
    }
}

p.__proto__ = pt

pt.__proto__ = {
    name: Harsh
}

p.run()
console.log(p.name)
