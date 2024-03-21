console.log("tut 8 - Use of Static method js")

// Static methods are used to implement functions that belong to a class as a whole and not to any particular object
class animal{
    constructor(name){
        this.name = animal.capitalize(name)
    }

    walk() {
        alert("animal " + this.name + " is walking")
    }

    // static methods aren't available for individual objects
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length) 
    }
}

let i = new animal("jack")
i.walk()