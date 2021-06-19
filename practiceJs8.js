//OBJECTS :
//object is collection of properties
//in JS, collection of key-value pair

let person =
{
    firstName : 'Biswa',
    lastName : 'Nayak',
    fullName : function()
    {
        return this.firstName+" "+this.lastName
    }
}
console.log("Full name : "+person.fullName())
console.log(person.firstName)
console.log(person['lastName'])

//change property - change firstName
person.firstName = 'Biswajeet'
console.log(person.firstName)

//add/insert new property
person.gender = 'male'
console.log(person)

//delete a property
delete person.gender
console.log(person)

//check if property exits in the object
console.log('gender' in person)

//iterate over all the keys in the object
for(key in person)
{
    console.log(key+" : ") //for keys
    console.log(person[key]) //for values
    console.log("------------")
}