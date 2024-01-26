console.log("tut 29 chapter -6  practice Question");

// #1
console.log("Q1")
let age = prompt("Enter your age")
age = Number.parseInt(age)

const check = (age) => {
    return age >= 18 ? true : false
}
if (check(age)) {
    alert("You Can Drive")
}
else {
    alert("You Cannot Drive")
}

// #2
console.log("Q2")
let run = true;
const checks = (age) => {
    return age >= 18 ? true : false
}

while (run) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)

    if (checks(age)) {
        alert("You Can Drive")
    }
    else {
        alert("You Cannot Drive")
    }
    run = confirm("DO YOU WANT TO CHECK AGIN ?")
}

// #3 
console.log("Q3")
let run = true;
const checks = (age) => {
    return age >= 18 ? true : false
}

while (run) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("PLS ENTER A VALID AGE") // It will show an error in the console
        alert("PLS ENTER A VALID AGE")
    }

    if (checks(age)) {
        alert("You Can Drive")
    }
    else {
        alert("You Cannot Drive")
    }
    run = confirm("DO YOU WANT TO CHECK AGIN ?")
}

// #4
console.log("Q4")
let a = prompt("ENTER A NUMBER")
a = Number.parseInt(a)

if (a > 4) {
    location.href = "https://google.com" //it will direct you to google.com if input number is greater than 4.
}

// #5
console.log("Q5")
let color = prompt("ENTER A COLOR")

document.body.style.backgroundColor = color //it will change the color on user input based
