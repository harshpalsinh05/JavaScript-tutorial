console.log("tut 9 - getters, setters and instanceOf operator in js")

// classes may include getters and setters to get & set the computed properties
 
class open {
    constructor(name) {
        this.name = name
    }

    fly(){
        console.log(`${this.name} ud raha he`)
    }

    // first the name property is changed to _name to avoid the name collision with the getter & setter.
    // then the getter uses the get keyword to get a name as shown below 
    // the syntax for getter is :-
    get name(){
        return this._name
    }

    // same as getter, the setter uses the set keyword to set a newName as shown below
    // the syntax for setter is :-
    set name(newName){
        this._name = newName
    }
}

class close extends open {
    bandh(){
        console.log("Class BANDH KARE")
    }
}

let man = new open("Harsh")
let men = new close("Harsh")
man.fly()

// use of getter method and get the value
console.log(man.name) // here it will return and get the name in the console

// use of setter method and set the value
man.name = "Harshpalsinh R Jadeja"  // here it will set the value and it will return it

// if the value is set by using setter method then getter will not return. 

// instanceof operator
// the instanceof operator allows to check whether an object belongs to a certain class
console.log( man instanceof open)
console.log( man instanceof close)

console.log( men instanceof open)
console.log( men instanceof close)

let woman = 55
console.log( woman instanceof open)
console.log( woman instanceof close)

// it return true if object belongs to the class or any other class inhereting from it 

//  -------------------------------------------------------------------------------//