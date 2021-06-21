//INHERITANCE :

const Person = require('./practiceJs9')
class Employee extends Person
{
    constructor(firstName, lastName)
    {
        //call parent class constructor
        super(firstName, lastName)
    }
}

let e1 = new Employee("Chris","Evans")
e1.fullName()
console.log(e1.location)