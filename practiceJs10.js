//Importing a class :
//in previous class : module.exports = class ClassName
//in current class : require('./practice9')

const Person = require('./practiceJs9')
let p1 = new Person("Chris","Edward")
p1.fullName()