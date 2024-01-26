console.log("tut 27 Alert, prompt and Confirm in Js")
alert("enter the value of a!")

let a = prompt("Enter here", "69")
a = Number.parseInt(a)
alert("your entered type is " + (typeof a))

let write = confirm("Do you want to write it to the page")
if( wrtie) {
    document.write(a)
}
else{
    document.write("Please ALlow me to write")
}
document.write(a)