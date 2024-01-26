console.log("tut 13 introduction to string");
let name = "Harsh";
console.log(name);
console.log(name.length); //it will show the length of the strinames
let names = 'harsh';
console.log(names);
// it will print the string in order of their number
 console.log(names[0]);
 console.log(names[1]);
 console.log(names[2]);
 console.log(names[3]);
 console.log(names[4]);

console.log("\n-> template literals in string")
// template literals use backtics instead of quates to dine a string
// we can insert variables directly in template literal it is known as String Interpolation   
let h1 = "Mohit";
let h2 = "Rohit";
// if we have to print that Mohit is a good friend of Rohit, then 

let sentence = `${h1} is a good friend of ${h2} \n` //it is called string interpolation
console.log(sentence);

console.log("-> escape sequence charaters in string")
let ft = 'Orange aren\'t Orange' //to use single quote in a string " \ " is used.
console.log(ft);

let nt = 'Oranges are good. \nOranges are Oranges \n' // to break a new line we used " \n ".
console.log(nt);

let tt = 'groot are good. \tapple are nice.' // to put a space of Tab size we used " \t ".
console.log(tt);

let rt = 'red is black. \rblack is white.' // to carriage return we used " \r ".
console.log(rt);



