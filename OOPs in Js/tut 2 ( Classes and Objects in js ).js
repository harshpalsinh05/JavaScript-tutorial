console.log("tut 2 - Classes and Objects in js")
// in OOP , a class is an extensible program - code template for creating objects, providing initial values for state and implementation of behavior 

class railwayFrom{
    submit(){
        alert(this.name + ": Form submitted for tain number :" + this.trainno)
    }
    cancel(){
        alert(this.name + ": From cancelled for tain number :" + this.trainno)
    }
    fill(givename, giveentrainno){
        this.name = givename
        this.trainno = giveentrainno
        //this. is property 
    }
}

let harshFrom = new railwayFrom()
harshFrom.fill("Harsh", 233546)

let rohitFrom = new railwayFrom()
rohitFrom.fill("rohit", 235578)

let rohitFrom2 = new railwayFrom()
rohitFrom2.fill("rohit", 9882475)

harshFrom.submit()
rohitFrom.submit()
rohitFrom2.submit()
rohitFrom2.cancel()