console.log("tut 6 - Method overriding using super keyword in js ")

// if we create our own implementation of run, it will not be taken from the animal class. This is called Method Overriding

class employee {
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