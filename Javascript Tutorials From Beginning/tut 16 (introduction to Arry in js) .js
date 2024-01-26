console.log("tut 16 indtroduction to Arrays");
/! ARRAYS ARE MUTABLE , ARRAYS CAN BE CHANGE !/;
/* Arrays are collection of some items
Arrays are variables which can hold more than one value and it can different types like string, integers, false etc*/
let marks_12 = [99, 45, 55, 87, false, "Not Present"];
console.log("Marks of 12th class are ", marks_12);
console.log(" Marks of role number 1 is ",marks_12[0]);
console.log(" Marks of role number 2 is ",marks_12[1]);
console.log(" Marks of role number 3 is ",marks_12[2]);
console.log(" Marks of role number 4 is ",marks_12[3]);
console.log(" Marks of role number 5 is ",marks_12[4]);
console.log(" Marks of role number 6 is ",marks_12[5]);
console.log(" Marks of role number 7 is ",marks_12[6]); //IT WILL BE UNDEFINED BECAUSE INDEX 6 DOEN'T EXIT
// TO FIND THE LENGTH OF ARRAYS, THE LENGTH WILL STARTS OF 1 , NOT 0 IN ARRAYYS
console.log("\t");
console.log("To find the length of the arrays we use (.length)")
console.log("The length of marks_12 = ", marks_12.length);

console.log("\t");
// if you wana add values you can by
console.log("To add a new value in the given array can be done")
marks_12[6] = 39;
console.log(marks_12[6]); //NOW IT WILL NOT SHOW UNDEFINED BECAUSE INDEX 6 EXIT
console.log(marks_12);
console.log("The length of marks_12 = ", marks_12.length);

console.log("\t");
console.log("Arrays are mutable, so they can be changed")
// if you wana change existing values you can by
marks_12[0] = 12; // IT WILL CHANGE THE VLUE OF 0 WHICH WAS 99, NOW IT WILL BE 12.
console.log(marks_12[0]);
console.log(marks_12);
console.log("The length of marks_12 = ", marks_12.length);
/* in js, arrays are the objects, the type operator on arrrays returns as object */
console.log(typeof marks_12);
/! ARRAY IS AN OBJECT !/;

console.log("\t");
// QUCIK QUIZ

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, false, true, "OK DONE"];
for (let i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, false, true, "OK DONE"];
for (let a in array) {
  console.log(array[a]);
}
