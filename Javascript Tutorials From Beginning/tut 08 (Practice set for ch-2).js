console.log("tut08 chapter - 2 practice question");

console.log("-> question 1");
let age = prompt("What is your age ?");
if (age >= 10 && age <= 20) {
    alert("Your age is b/w 10 & 20");
} else {
    alert("your age is not in b/w 10 & 20");
}

console.log("-> question 2");
let day = prompt("What is today's Date?");
switch (day) {
    case "1":
        alert("Today is Monday");
        break;

    case "2":
        alert("Today is Tuesday");
        break;

    case "3":
        alert("Today is Wenesday");
        break;

    case "4":
        alert("Today is thusday");
        break;

    case "5":
        alert("Today is Friday");
        break;

    case "6":
        alert("Today is Saterday");
        break;

    case "7":
        alert("Today is Sunday");
        break;

    default:
        alert("enter valid date")
}

console.log("-> question 3");
let n = prompt("Enter a Number ?");
if (n % 2 == 0 && n % 3 == 0) {
    console.log("Your Number is divisible by 2 and 3");
}
else {
    console.log("Your Number is not divisible by 2 and 3");
}

console.log("-> question 4");
let N = prompt("Enter a Number ?");
if (N % 2 == 0 && N % 3 == 0) {
    alert("Your Number is divisible by 2 and 3 both");
}
else if (N % 2 == 0) {
    alert("Your Number is divisible by 2");
}
else if (N % 3 == 0) {
    alert("Your Number is divisible by 3");
}
else {
    alert("Your Number is not divisible by either 2 or 3");
}


console.log("-> question 5");
let Age = prompt("what is your age?")
console.log("You Can", (Age <= 18 ? "Not Drive" : "Drive"));