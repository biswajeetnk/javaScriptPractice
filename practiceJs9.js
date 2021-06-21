//CLASSES : introduced from ES6 engine
module.exports = class Person
{
    age = 28
    //location = "India"
    get location()
    {
        return "India"
    }

    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName()
    {
        console.log(this.firstName +" "+ this.lastName)
    }
}

/*let p = new Person("Biswajeet", "Nayak")
let p1 = new Person("David", "Wokes")
console.log(p.age)
//console.log(p.location)
console.log(p.location)
p.fullName() //method
//p.location //property
p1.fullName()*/