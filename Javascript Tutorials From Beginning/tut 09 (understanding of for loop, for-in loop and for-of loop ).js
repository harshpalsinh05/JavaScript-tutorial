console.log(" 09 ( for, for-in and for-of )loops");
/*
the syntax of a loop looks like - 
for ( statement 1; statement 2; statement3 ){
    then the code to be executed here
}    
statement 1 is executed one time only
statement 2 is the condition base on which the loop runs (like the body of loop)
statement 3 is executed everytime the loop body is executed
*/
console.log("-> understanding of for loop")
for (let i = 0; i<5; i++){
  console.log(i)
}

for (let i = 1; i<5; i++){ //it will always print to n-1 number
  console.log(i)
}

console.log("-> Q1 using loop for adding first natural number")
let sum = 0
let add = 0
let n = 4 //prompt("enter the value for n")
for(i=0; i<n; i++){
    sum += (i)
    add += (i+1)
  }
  alert("Sum of first " + n + " Whole numbers is " + sum)
  alert("Sum of first " + n + " Natural numbers is " + add)
  
  console.log("-> Q2 print the ODD number only")
  for ( i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
  
  console.log("-> Q3 print the even number only")
  for ( i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  
  // O — Iterate through all numbers from 1 to 35. Print the following:
  // For multiples of 3 print “Fizz”
  // For multiples of 5 print “Buzz”
  // For multiples of 3 and 5 print “FizzBuzz”
  console.log("-> Q4 print a multiples for 3 and 5")
  for (i=1; i<20; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz")
    } else if (i % 3 == 0){
      console.log("Fizz")
    }  else if (i % 5 == 0){
      console.log("Bizz")
    }
  }

  console.log("-> understanding of for-in loop")
  /* for-in loop are use to print the key of any given objects
   for( key in objects){
    code to be executed
   }
   */
  let object = {
    harsh: 90,
    harshil: 30,
    harshpal: 50,
    harshdeep: 40
  } 
  for (let a in object){
    console.log("Marks of " + a + " are " + object[a])
  }

  console.log("-> understanding of for-of loop")
  /* for (variable of iterable) // iterable data structure like Arrays, String etc. 
  {  
    code to be executed
  }  */
  for (let b of "harsh"){
    console.log(b)
  }


