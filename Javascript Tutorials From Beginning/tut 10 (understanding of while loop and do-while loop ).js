console.log(" 10 while and do-while loops");
/*  while(condition)  //the condition should be true, otherwise if the condtion is false then the loop will never end and later it will crash runtime
    {
    code to be executed here
    }
*/

console.log("-> understanding of while loop")
let n = 5; // prompt("enter the value of n")
let i = 0;
while (i < n) {
    console.log(i)
    i++;
}

console.log("-> understanding of do-while loop") // here in do whle loop the block will execute one time and then will check the condition given
let I = 6
do {
    console.log(I)
    I++;
} while (I < n) // if the condtion is false then it will always print the intial value one time