
// Math Object in javascript

const num = 30.4049

// to generate random numbers
console.log(Math.floor(Math.random() * 11))



// using template literals in javascript

let name = 'kenechukwu'
let age = 22
let state = 'Anambra'

console.log(`My name is ${name}, am ${age} years old and am from ${state}`)

// String Methods

let myName = 'kenechukwu'

console.log(myName.toUpperCase().length)

let firstLetter = myName[0].length
let secondLetter = myName[1]


console.log(secondLetter)

// using the split string function 

let array = "i am coming to you"

console.log(array.split(' '))

// replacing method

let string = '30 days of javascript'

console.log(string.replace('days', 'weeks'))
console.log(string.includes('days'))


// concatenating strings

let country = 'Nigeria'

console.log(country.concat(' land '))

// searching within strings

let search = 'i am learning another type of javascript '
console.log(search.search('javascript'))
console.log(search.match('type'))
console.log(search.match('type'))


// Excesses

let challenge = '30 Days Of Javascript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(2))
console.log(challenge.includes('script'))
// console.log(typeOf(challenge.split(" ")))

// Comparison Operators

console.log(3 > 2)
console.log(2 > 3)
console.log(4 >= 4)
console.log(3 == '3')
console.log(3 === '3')
console.log(3 != 3)
console.log('mango'.length == 'orange'.length)


// Logical Operators
const check = 3 > 4 && 3 > 5
const check1 = 3 > 4 && 3 > 5 || 3 > 4 && 4 < 3
console.log(!check1)


// Ternary Operators

let constant = true

constant ? console.log("constant is true") : console.log("constant will be false ")

let numbers = 0

numbers > 9 ? console.log(" ok am coming up") : console.log("lets keep going ")

// Window Methods

// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree)


// Date Object
const now = new Date()
console.log(now)
console.log(now.getFullYear())


let date = now.getDate()

console.log(now)


// Day 3: Exercises

let firstName = 'Kenechukwu'
let lastName = 'Nweke'
let State = 'Anambra State'
let Age = 24
let isMarried = true
let year = 2024

console.log(typeof (firstName))
console.log(typeof (lastName))
console.log(typeof (state))
console.log(typeof (Age))
console.log(typeof (isMarried))
console.log(typeof (year))

let num1 = 10 === '10'
let num2 = "20" == 20

console.log(num1)
console.log(num2)


let area =













