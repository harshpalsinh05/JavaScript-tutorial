console.log(" tut 10 - practice set")

class complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
}

let a = new complex(2, 8)
let b = new complex(3, 5)

a.add(b)
console.log(`${a.real}+${a.imaginary}i`)

// ------------------------------------------------------------------- // 

class human {
    constructor(name, favfood) {
        this.name = name
        this.favfood = favfood
    }
    walk() {
        console.log(`${this.name} human is walking`)
    }
}

class student extends human {
    walk() {
        console.log(`${this.name} is student and walking`)
    }
}

let h = new human("harsh", "franki")
h.walk()

let s = new student("harshpal", "VadaPav")
s.walk()

// -------------------------------------------------- //

console.log(s instanceof human)

// -------------------------------------------------- //

class complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set real(newReal){
        this._real = newReal
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary
    }
}

let c = new complex(2,4)
console.log(c.real, c.imaginary)
c.real = 10
c.imaginary = 10
console.log(c)
