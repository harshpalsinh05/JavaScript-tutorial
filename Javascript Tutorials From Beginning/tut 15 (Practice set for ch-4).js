console.log("tut 15 chapter - 4 practice Question");
// Q1
console.log("Question 1");
let name = "Har\"sh";
console.log("Har\"".length);

console.log("\t");

// Q2
console.log("Question 2");
const sent = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sent.includes(word));
console.log(`The word "${word}" ${sent.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log("\t");

const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
console.log(str1.startsWith('Sat', 3));

console.log("\t");

const str = 'Cats are the best!';
console.log(str.endsWith('best!'));
console.log(str.endsWith('best', 17));

const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));

console.log("\t");

// Q3
console.log("Question 3");
let H1 = 'HARSHPALSINH';
console.log(H1.toLowerCase());

console.log("\t");

// Q4
console.log("Question 4");
let para = "Please give me Rs1000"
console.log(para.slice(17));
console.log(typeof para);
/* or */
console.log("\t");

let amount = Number.parseInt(para.slice("Please give me Rs".length));
console.log(amount);
console.log(typeof amount);

console.log("\t");

// Q5
console.log("Question 5");
let bro = "HArshpal"
// newbro[3] = "R"
// we can replace a charater, but we can not change the string, because string is immutable
let newbro = bro.replace("A", "a")
console.log(newbro);