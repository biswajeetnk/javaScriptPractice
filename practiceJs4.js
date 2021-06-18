//SORTING :
//with numbers and strings

let fruits = ['Watermelon','Banana','Apple','Oranges','Grapes']
fruits.sort()
console.log(fruits)

let numbers = [79,45,12,1,10,3]
//console.log(numbers.sort()) //op : [ 1, 10, 12, 3, 45, 79 ] -> here 3 should be after 1. So we need apply custom sort logic
//1-way : anonymous function, a function which doesn't have name
console.log(numbers.sort(
    function(a,b)
    {
        return a-b
    }
))

//2-way :
console.log(numbers.sort((a,b) => a-b))
console.log(numbers.sort((a,b) => b-a)) //reverse

