console.log(" tut 7 - Overriding in constructor js ")

// with a constructor, things are a bit different according to the specification, if a class extends another class and has no constructor, then the following empty constructor is generated

class employee {
    constructor(name){
        console.log(`${name} - Employee's constructor is here`)
        this.name = name
    }
    login() {
        console.log(`employee has logged in`)
    }
    logout() {
        console.log(`employee has logged out`)
    }
    requestleaves(leaves) {
        console.log(`employee has requested ${leaves  + 1} leaves`)
    }
}

class programmer extends employee {
    constructor(name){
        super(name)
        // constructor in inhereting class must call super(...) and do it before using this. method
        // we can also use super.method() in a child method to call parent method 
        console.log(`programmer new constructor`)
        this.name = name
    }
    
    // if there is no constructor in the child class, this super constructor is created automatically
    // constructor(...args){
    //     super(...args)
    // }

    requestcoffe(n) {
        console.log(`employee has requested ${n} coffees`)
    }

    requestleaves(leaves) {
        // console.log(`employee has requested ${leaves + 1} leaves (one extra)`)
        // instead of this we can use super keyworld
        // when we override a method, we dont want the method of the previous class to go in vain   
        super.requestleaves(5)
    }

}

let e = new programmer()
e.login()

// we don't need toh call the method here if we are using super keyword
e.requestleaves() 