console.log("tut 14 methods of string");
//1
console.log("\n -> 1) .length method")
let name = "Harsh"
console.log(name.length); //it will print the length of the string
//2
console.log("\n -> 2) .toUpperCase method")//the U and C should be capitcal in letters
console.log(name.toUpperCase()); //it will change the string to uppercase
//3
console.log("\n -> 3) .toLowerCase method")
console.log(name.toLowerCase()); //it will change the string to lowercase
//4
console.log("\n -> 4) .slice method")
console.log(name.slice(2, 4)); //it will display the 2 and 3 placed charater in the string and 4 will be not included
console.log(name.slice(2));//it will display the all the charater from the 2nd placed to the end of the string 
//5
console.log("\n -> 5) .replace method")
console.log(name.replace("Ha", "Ta")); //it will replace the string with a new replaced string

let bro = "Harsh"
let newbro = name.replace("H", "A")
console.log(newbro); // here it will print the replaced new string
//6
console.log("\n -> 6) .concat method")  
let friend = "Aman"
console.log(name.concat(" is a Friend of ", friend, " And ", newbro, " is also a friend of ", name));
// so basically it will merge the string with each other if you want them in a sentence
// 7
console.log("\n -> 7) .trim method")
let friend1 = "    rishi    "
console.log(friend1);
console.log(friend1.trim()); //it will remove the space from the string from front & back both sides

//8 QuickQuiz : use  a For-loop to print a string
let string = " Harshpalsinh " + " Jadeja ";
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}
