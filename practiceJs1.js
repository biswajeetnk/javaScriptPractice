console.log("Namaste JavaScript")

//this is comment
console.log("Starting with JavaScript")

let a = 4
console.log(a)
console.log("Type of 'a' variable : "+typeof(a))

let b=2.90
console.log("Type of 'b' variable : "+typeof(b))

var sum=a+b
console.log("Sum is : "+sum)
console.log("Type of 'sum' variable : "+typeof(sum))

var sum=10
console.log("Sum is : "+sum)

let c="Biswajeet"
console.log("Type of 'c' variable : "+typeof(c))

let d=true
console.log("Type of 'd' variable : "+typeof(d))

// ! operator
var booleanValue=true
console.log(booleanValue) //op : true
console.log(!booleanValue) //op : false (negation of true)

//reassigning with 'let'
let reassign=10
reassign=12
console.log(reassign)

//const keyword - assigned value cannot be changed
const constantVariable = 10
constantVariable=12
console.log(constantVariable)

//summary of const, let, var :
//var : if you want to redeclare the value, go for 'var'
//let : if you want to reassign the value, go for 'let'
//const : if you dont want to reassign the value, go for 'const'