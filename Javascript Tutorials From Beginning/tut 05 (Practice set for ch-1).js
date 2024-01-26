console.log("Practice set for ch-1")
// Question 1
console.log("-> Question 1")
let a = "Harshpal"
let b = 6
console.log(a + b)

// Question 2
console.log("-> Question 2")
console.log(typeof (a + b))

// Question 3
console.log("-> Question 3")
const a1 = {
  name: "harsh",
  section: 1,
  notclass: false
}
// a1 = 45 //(It will show a error)
console.log("you cann't change the const object later once its declayered")

// Question 4
console.log("-> Question 4")
a1['friend'] = "shubham" //it will add a friend section in const a1
a1['name'] = "Lota" //it will change the value of the 'name' from "harsh" to "Lota"
console.log(a1)
console.log(a1.name) //it will print the value of the oject which is stored there 

// Question 5
console.log("-> Question 5")
const dict = {
  appreciate: "recogonize the full worth of.",
  yakka: "work, especially hard work. "
}
console.log(dict.yakka) // or you can also write it as (dict['yakka'])
console.log("Thank U");
