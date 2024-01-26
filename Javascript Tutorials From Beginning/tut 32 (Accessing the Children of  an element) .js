console.log(" tut 32 Accessing the children of an element in javascript")

//Direct as well as  deeply nested  element of an element are called its children 

// child node - element which are direct children for eg. head & body are children of HTML

document.body.firstChild // it will represent the first child inside the body tag

document.body.lastChild // it will represent the last child inside the body tag

document.body.childNodes // it wiil show all the child which is inside the body tag

document.body.childNodes[0] === document.body.firstChild // !important

document.body.childNodes[document.body.childNodes.length - 1 ] === document.body.lastChild // !important
// the length of child nodes index will start from 0 

document.body.hasChildNodes() // It is used to check whelter there are any child nodes inside the parent node

// the childnodes look like an array, but it is not an actual array but a collection nodes

// but we can convert that nodes into array
let arr = Array.from(document.body.childNodes)
console.log(typeof arr) // here now it is converted into array, but array methods won't work here 