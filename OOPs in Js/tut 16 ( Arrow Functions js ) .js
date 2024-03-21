console.log("tut 16 - Arrow Functions js")

const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
}
sayHello("Harry")

const sayHelloo = (name, greeting) => console.log(greeting + " " + name)
sayHelloo("harsh", "Hii bro")

  
  
  const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,

    show1: function(){
        let that = this
        console.log(this)
        setTimeout( function() {
            console.log(`The name is ${that.name}\nThe role is ${that.role}`)
        }, 2000);
    },

    show2: function() {
      setTimeout(() => {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
