console.log(" tut 4 - Constructors in Js part 2")

class railwayFrom {
    // the constructor() method is called automatically by new, so we can initialize the object there
    constructor(givename, giventrainno, givenaddress) {
        console.log("constructor is called ")
        this.name = givename
        this.trainno = giventrainno
        this.address = givenaddress
    }

    preview() {
        alert(this.name + ": Your from is for train number: " + this.trainno + " and your address is " + this.address)
    }
    submit() {
        alert(this.name + ": Form submitted for tain number :" + this.trainno)
    }
    cancel() {
        alert(this.name + ": From cancelled for tain number :" + this.trainno)
        this.trainno = 0
    }

}

let harshFrom = new railwayFrom("Harsh", 234352, "ghasnic - 232d")
harshFrom.preview()
harshFrom.submit()
harshFrom.cancel()
harshFrom.preview()