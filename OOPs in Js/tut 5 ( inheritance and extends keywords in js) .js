console.log("tut 5 - inheritance and extends keywords in js")

// class inheritance is a way for one class to extend another class. this is done by using the extends keyword

class animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running!")
    }
    shout() {
        console.log(this.name + " is running!")
    }
}

// we will not copy the same code as it was in animal and then will add a new method in it
// class monkey{
//     constructor(name, color) {
//         this.name = name
//         this.color = color
//     }
//     run() {
//         console.log(this.name + " is running!")
//     }
//     shout() {
//         console.log(this.name + " is shouting!")
//     }
//     mon(){
//         console.log(this.name + " is eating banana!")
//     }
// }
// this will take forever to copy every time then add in it.


// instead of copy paste, we want make a class with same method as animal and some with some addon method with we will use the EXTENDS KEYWORAD 

class monkey extends animal{
    eats(){
        console.log(this.name + " is eating banana!")
    }
}

let ani = new animal("Donkey", "white")
let mon = new monkey("Monkey", "brown")

ani.shout()
mon.eats()

// we can do mon.eats() 
// but we cann"t ani.eats() it will show us error