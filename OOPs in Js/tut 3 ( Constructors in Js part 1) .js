console.log(" tut 3 - Constructors in Js part 1")

class railwayFrom{
    // the constructor() method is called automatically by new, so we can initialize the object there
    constructor(givename, giveentrainno){
        console.log("constructor is called ")
        this.name = givename
        this.trainno = giveentrainno
    }

    submit(){
        alert(this.name + ": Form submitted for tain number :" + this.trainno)
    }
    cancel(){
        alert(this.name + ": From cancelled for tain number :" + this.trainno)
    }

}

let harshFrom = new railwayFrom("Harsh", 233546)
// harshFrom.fill("Harsh", 233546)

let rohitFrom = new railwayFrom("rohit", 235578)
// rohitFrom.fill("rohit", 235578)

let rohitFrom2 = new railwayFrom("rohit", 9882475)
// rohitFrom2.fill("rohit", 9882475)

harshFrom.submit()
rohitFrom.submit()
rohitFrom2.submit()
rohitFrom2.cancel()