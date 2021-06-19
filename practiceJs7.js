//STRINGS : collection of characters

let day = "Saturday "
console.log(day.length)

console.log("***************************************")

console.log(day.slice(2,6))

console.log("****************************************")

console.log(day[1])

console.log("****************************************")

let splitDay = day.split("S")
console.log("splitted word : "+splitDay[1])
console.log("splitted word length : "+splitDay[1].length)
console.log("length after trim : "+splitDay[1].trim().length)

console.log("****************************************")

//convert string into int : parseInt()
let date1 = '15'
let date2 = '10'
let difference = parseInt(date1) - parseInt(date2)
console.log("The difference between date1 and date2 is : "+difference)

console.log("****************************************")

//concat 2 strings : (+)
let weekend = "Friday"
let quote = weekend+" is a funday day"
console.log(quote)

console.log("****************************************")

//indexOf() :
//quote : Friday is a funday
console.log("Index of 1st occurence day is : "+quote.indexOf("day")) //3
//let val = quote.indexOf("day",4) //the number 4 tells that search for the next 'day' from index 4. if 5 -> then search for 'day' from index-5
//console.log("Index of 2nd occurence day is : "+val) //15
let val = quote.indexOf("day")

//occurence of a word in String using indexOf and while loop :
let count = 0
while(val !== -1)
{
    count++
    val = quote.indexOf("day",val+1)
}
console.log("count of 'day' is : "+count)

console.log("****************************************")


