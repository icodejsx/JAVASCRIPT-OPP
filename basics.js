// // // Math Object in javascript

// // const num = 30.4049;

// // // to generate random numbers
// // console.log(Math.floor(Math.random() * 11));

// // // using template literals in javascript

// // let name = "kenechukwu";
// // let age = 22;
// // let state = "Anambra";

// // console.log(`My name is ${name}, am ${age} years old and am from ${state}`);

// // // String Methods

// // let myName = "kenechukwu";

// // console.log(myName.toUpperCase().length);

// // let firstLetter = myName[0].length;
// // let secondLetter = myName[1];

// // console.log(secondLetter);

// // // using the split string function

// // let array = "i am coming to you";

// // console.log(array.split(" "));

// // // replacing method

// // let string = "30 days of javascript";

// // console.log(string.replace("days", "weeks"));
// // console.log(string.includes("days"));

// // // concatenating strings

// // let country = "Nigeria";

// // console.log(country.concat(" land "));

// // // searching within strings

// // let search = "i am learning another type of javascript ";
// // console.log(search.search("javascript"));
// // console.log(search.match("type"));
// // console.log(search.match("type"));

// // // Excesses

// // let challenge = "30 Days Of Javascript";
// // console.log(challenge);
// // console.log(challenge.length);
// // console.log(challenge.toUpperCase());
// // console.log(challenge.toLowerCase());
// // console.log(challenge.substring(2));
// // console.log(challenge.includes("script"));
// // // console.log(typeOf(challenge.split(" ")))

// // // Comparison Operators

// // console.log(3 > 2);
// // console.log(2 > 3);
// // console.log(4 >= 4);
// // console.log(3 == "3");
// // console.log(3 === "3");
// // console.log(3 != 3);
// // console.log("mango".length == "orange".length);

// // // Logical Operators
// // const check = 3 > 4 && 3 > 5;
// // const check1 = (3 > 4 && 3 > 5) || (3 > 4 && 4 < 3);
// // console.log(!check1);

// // // Ternary Operators

// // let constant = true;

// // constant
// // ? console.log("constant is true")
// // : console.log("constant will be false ");

// // let numbers = 0;

// // numbers > 9 ? console.log(" ok am coming up") : console.log("lets keep going ");

// // // Window Methods

// // // let number = prompt('Enter number', 'number goes here')
// // // console.log(number)

// // // const agree = confirm('Are you sure you like to delete? ')
// // // console.log(agree)

// // // Date Object
// // const now = new Date();
// // console.log(now);
// // console.log(now.getFullYear());

// // let date = now.getDate();

// // console.log(now);

// // // Day 3: Exercises

// // let firstName = "Kenechukwu";
// // let lastName = "Nweke";
// // let State = "Anambra State";
// // let Age = 24;
// // let isMarried = true;
// // let year = 2024;

// // console.log(typeof firstName);
// // console.log(typeof lastName);
// // console.log(typeof state);
// // console.log(typeof Age);
// // console.log(typeof isMarried);
// // console.log(typeof year);

// // let num1 = 10 === "10";
// // let num2 = "20" == 20;

// // console.log(num1);
// // console.log(num2);

// // // Conditionals

// // if (20 == 10) {
// //   console.log(" i am learin javascrpt");
// // } else {
// //   console.log("ok lets see");
// // }

// // let numb = 0;

// // if (numb > 0) {
// //   console.log(`${numb} is greater than zero`);
// // } else if (numb == 0) {
// //   console.log(`${numb} is equal than zero`);
// // } else if (numb != 0) {
// //   console.log(`${numb} is not equal than zero`);
// // } else console.log("alright ");

// // // arrays

// // const arr = Array();
// // console.log(arr);

// // const arr1 = [2, 3, 4, 5, 5, 6, 7, 7, 7];
// // console.log(arr1.length);

// // const arr2 =
// //   "i am learning javascript again hope to master it this time around";

// // const arr3 = arr2.split(" ");

// // console.log(arr2[0]);

// // // replaying array items

// // arr3[0] = "all";
// // console.log(arr3);

// // const fruits = ["banana", "orange", "mango", "lemon"];

// // let index = fruits.indexOf("band");
// // console.log(index);

// // index === -1
// //   ? console.log(" the fruist dosnt exist ")
// //   : console.log("the frust exists ");

// // const de = [...fruits];

// // console.log(de.slice(0, 3));

// // console.log(de.splice(2, 4));

// // console.log(fruits.push("come"));

// // const numbers3 = [3, 1, 2, 2, 3, 4, 5, 6];
// // numbers3.push(9);

// // numbers3.sort();
// // console.log(numbers3);

// // // understanding loopps

// // for (let i = 0; i <= 5; i++) {
// //   console.log(i);
// // }

// // for (let w = 10; w <= 100; w + 1) {
// //     console

// const Names = ["kene", "chisom", "poto", "mana"];

// for (let i = 0; i < Names.length; i++) {
//   console.log(Names[i].toUpperCase());
// }

// const numb1 = [1, 2, 4, 5, 5, 6, 6];
// let sum = 0;
// for (let i = 0; i < numb1.length; i++) {
//   sum = sum + numb1[i];
//   console.log(sum);
// }

// const newNames = ["kene", "chisom", "poto", "mana", "chigozie"];
// const newArr = [];

// for (let i = 0; i < newNames.length; i++) {
//   newArr.push(newNames[i].toUpperCase());
// }
// console.log(newArr);

// // while Loops

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let j = 0;

// // do {
// //   console.log(newArr.indexOf(i));
// // } while (i < newArr.length + 5);

// //  for of

// const tech = ["html", "css", "javascript", "typescript", "tailwind ", " cdss"];

// for (i = 0; i < tech.length; i++) {
//   console.log(tech[i].toUpperCase());
// }

// let k = 0;
// while (k < tech.length) {
//   console.log(tech[k].toUpperCase());
// }

// do {
//   console.log(tech[k].toUpperCase());
// } while (k < tech.length);

// for (const num of tech) {
//   console.log(num.toUpperCase());
// }

// Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let k = 0;
// while (k < 10) {
//   console.log(k);
//   k++;
// }

// let m = 10;
// do {
//   console.log(m);
//   m--;
// } while (m >= 0);

// // for of
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i <= numb.length; i++) {
//   console.log(`${i} * ${i ** 2} ""${i ** 3}`);
// }

// Use for loop to iterate from 0 to 100 and print only even numbers

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//     console.log(sum);
//   }
// }

// let odd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     odd = odd + i;
//     console.log(odd);
//   }
// }

// let totally = [sum, odd];
// console.log(totally);

// const number = Math.random(0) * 100000 + 1;

// console.log(Math.trunc(number));

// //

// functions

function func(nu, nu2) {
  let number = nu;
  let numbe = nu2;
  console.log(number * numbe * 2);
}
func(6, 20);

// a function that sums up the number in an array

function sun(rray) {
  let sum = 0;
  for (let i = 0; i < rray.length; i++) {
    sum = sum + rray[i];
  }
  return sum;
}

console.log(sun([1, 2, 3]));
