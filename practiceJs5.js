//FUNCTION :
//block of code

function add(a,b)
{
    return a+b
}

let sum = add(2,1)
console.log("Sum is : "+sum)


//anonymouse function : function which don't have name
//passing function to a variable. we can assign function to a variable only for anonymous functions
let sumOfIntegers = function(c,d)
{
    return c+d
}

console.log("Sum of integers : "+sumOfIntegers(1,10))


//anonymous function
let sumOfNumbers = (e,f) => e+f
console.log("Sum of numbers : "+sumOfNumbers(3,9))