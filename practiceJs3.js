//ARRAYS :
let marks = Array(6)
let marks2 = new Array(20,30,40,50,60,70)
let marks3 = [20,30,40,50,60,70]

//retrieve :
console.log(marks2)
console.log(marks2[0]) // o/p : 20 
console.log(marks3[1]) // o/p : 30

//re-assignment :
marks2[0] = 90
console.log(marks2[0]) // o/p : 90

//find array length :
console.log("Array marks2 length : "+marks2.length)

//push/insert a new element(at the end) :
marks2.push(65)
console.log(marks2)

//push/insert a new element(at the beginning) :
marks2.unshift(12)
console.log(marks2)

//pop/delete element :
marks2.pop(65)
console.log(marks2)

//know the index of the element :
console.log(marks2.indexOf(60))

//checks element in the array :
console.log(marks2.includes(500))

//breaks array :
//array is : [12,90,30,40,50,60,70]
console.log(marks2)
subArrayMarks = marks2.slice(2,5)
console.log(subArrayMarks)

//iterate the array :
console.log(marks3)
for(let i=0; i<marks3.length; i++)
{
    console.log(marks3[i])
}

//sum of all elements in the array :
var sum=0
for(let i=0; i<marks3.length; i++)
{
    sum = sum + marks3[i]
}
console.log("Sum of all elements in the array is(without reduce()) : "+sum)

console.log("***************************************************************************")
//above code can be reduce using a function in JS : reduce()
var total = marks3.reduce((sum, mark) => sum+mark, 0)
console.log("Total marks using reduce() is : "+total)

//find sum of all even numbers in the array :
//array is : [12,13,16,21]
var array1 = [12,13,16,21]
var sum=0
for(let i=0; i<array1.length; i++)
{
    if (array1[i] % 2 == 0)
    {
        console.log("Even elements in the array is(without using filter()) : "+array1[i])
        sum = sum + array1[i]
    }
}
console.log("Sum of only even elements in the array is : "+sum)

console.log("***************************************************************************")
//above code for displaying ONLY even elements of the array can be reduced using filter()
let evenArray = array1.filter(evenElement => evenElement%2 == 0)
console.log("Even elements in the array is(using filter()) : "+evenArray)

console.log("***************************************************************************")
//map() :
//replace the above array elements with element multiplied by 3 :
let finalArray = evenArray.map(evenElement => evenElement*3)
console.log("The final array having elements mutiplied with 3(using map()) : "+finalArray)

console.log("***************************************************************************")
//multiple each element with 3 and sum them
let sumOfElementsInTheArray = finalArray.reduce((sum,element) => element+sum, 0)
console.log("Sum of all the elements multiplied by 3(using reduce()) : "+sumOfElementsInTheArray)

console.log("***************************************************************************")
//all the above code for reduce(), filter(), map() can be reduced using chaining :
var originalArray = [12,14,19,21]
let finalResult = originalArray.filter(evenElement => evenElement%2 == 0)
                    .map(sumOfIndividualElement => sumOfIndividualElement*3)
                    .reduce((sumOfAllElements, element) => sumOfAllElements+element, 0)
console.log("Final result obtained : "+finalResult)

