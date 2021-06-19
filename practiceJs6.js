//BLOCK SCOPING : var, let, const

//var - applies at function level and block level
var greet="hi"
function demo()
{
    var greet = "hello"
}
console.log(greet) //op/p : hi --> its function level not block level

console.log("******************************************************************")

var something = "Biswa"
if(true)
{
    var something = "Nayak"
}

function demo2()
{
    var something = "BiswaN"
}

console.log("Name is : "+something)  // o/p : Nayak -> changed from Biswa. coz if() is not function, its a block --> its block level 

console.log("******************************************************************")
//let -> value cannot be redeclared, BUT can be re-initialised
let word = "Biswa"
//word = "Nayak"
if(true)
{
    let word = "Biswa Nayak"
}

function demo2()
{
    let word = "BiswaN"
}

console.log("Name is : "+word) // o/p : Biswa --> cannot be redeclare with let keyword, BUT can be reinitialised
console.log("******************************************************************")

//const :
//let -> value cannot be redeclared, BUT can be re-initialised
const word = "Biswa"
if(true)
{
    let word = "Biswa Nayak"
}

function demo2()
{
    let word = "BiswaN"
}

console.log("Name is : "+word)
// o/p : SyntaxError: Identifier 'word' has already been declared. const values acnnot be redeclared
