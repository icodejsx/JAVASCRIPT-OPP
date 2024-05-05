// // // Math Object in javascript

// const { ObjectFlags } = require("typescript");

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
// const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

// function func(nu, nu2) {
//   let number = nu;
//   let numbe = nu2;
//   console.log(number * numbe * 2);
// }
// func(6, 20);

// // a function that sums up the number in an array

// function sun(rray) {
//   let sum = 0;
//   for (let i = 0; i < rray.length; i++) {
//     sum = sum + rray[i];
//   }
//   return sum;
// }

// console.log(sun([1, 2, 3]));

// (function (n) {
//   console.log(n * n);
// })(2);

// (function (n) {
//   console.log(n * n)
// })(3)

// let totall = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// let arr = [1, 2, 3, 5];

// console.log(totall);

// const arrow = (i = 10) => {
//   for (let i = 0; i <= 5; i++) {
//     console.log(i * i);
//   }
//   return i;
// };

// const name = (firsName = "obi", lasName = "nweke") => {
//   let firstName = firsName;
//   let lastName = lasName;
//   fullName = firstName + " " + lastName;
//   return fullName;
// };
// console.log(name());

// const person = {
//   firstName: "kene",
//   lastName: "nweke",
//   age: 22,
//   country: "England",
//   date: 10 / 30 / 12,
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullname: function () {
//     fullname = this.firstName + " " + this.lastName;
//     return fullname;
//   },
// };

// console.log(person.getFullname());

// person.date = new Date().getDate();
// console.log(person.date);

// const copyPerson = Object.assign({}, person);

// copyPerson.skills.push("next");

// console.log(copyPerson);

// // const values = Object.values(copyPerson);
// // // console.log(values.getFullname());

// const entries = Object.entries(copyPerson);
// console.log(entries);
// console.log(copyPerson.hasOwnProperty("lastName"));

// const dog = {};
// dog.name = "bigdog";
// dog.legs = 4;
// (dog.bark = function () {
//   return "woof  woof";
// }),
//   (dog.color = "red"),
//   (dog.age = 17),
//   (dog.getDogInfo = function () {
//     return ` ${this.name} is a big dog  and his age ${this.age} and his ${
//       this.color
//     } color also with ${this.legs} and barks ${this.bark()}`;
//   });
// console.log(dog.getDogInfo());

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// let maxSkills = 0;
// let userWithMaxSkills = "";

// for (const user in users) {
//   const numSkills = users[user].skills.length;
//   if (numSkills > maxSkills) {
//     maxSkills = numSkills;
//     userWithMaxSkills = user;
//   }
// }

// console.log(maxSkills, userWithMaxSkills);

// for (const user in users) {

//    if (isLoggedIn)
// }

// Higher Order Function

// let n = 2;
// const callBack = (n) => {
//   return n ** 2;
// };

// function cube(callBack, n) {
//   return callBack(n) * n;
// }

// console.log(cube(callBack, 3));

// const firstfunc = (m) => {
//   const secFun = (n) => {
//     const thirdFunc = (o) => {
//       const forth = (p) => {
//         return 2 * m * n * o * p;
//       };
//       return forth;
//     };
//     return thirdFunc;
//   };
//   return secFun;
// };

// console.log(firstfunc(2)(2)(2)(2));

// const numbers = [1, 3, 4, 5, 6];
// const sumArry = (arr) => {
//   let sum = 0;

//   arr.forEach((element) => {
//     sum = sum + element;
//   });
//   return sum;
// };

// console.log(sumArry(numbers));

// const numbers2 = [2, 3, 4, 5, 6, , 7, , 5, 5, 4];
// console.log(sumArry(numbers2));

// function sayHello() {
//   console.log("Hello");
// }
// setInterval(sayHello, 10); //

// const arry = [2, 3, 4, 5, 6, 7, 8, 8, 9, 20];

// let sum = 0;
// arry.forEach((element) => {
//   sum = sum + element;
//   return sum;
// });
// console.log(sum);

// arry.forEach((element) => console.log(element));

// const countries = ["niger", "gambia ", "america", "mali", "Nigeria"];

// // countries.forEach((country) => console.log(country.toUpperCase()));

// countries.map((country) => console.log(country.toUpperCase().slice(0, 3)));

// const filter = countries.filter((country) => country.length === 4);
// console.log(filter);
// const numbers = [1, 3, 2, 4, 5, 5, 4, 3];
// const square = numbers.map((number) => 2 * number);

// console.log(square);

// const Students = [
//   { name: "KEN,", score: 34 },
//   { name: "cals,", score: 54 },
//   { name: "obi,", score: 35 },
//   { name: "car,", score: 34 },
//   { name: "come,", score: 54 },
//   { name: "send,", score: 36 },
//   { name: "it,", score: 24 },
//   { name: "si,", score: 34 },
// ];

// const sudent = Students.filter((student) => student.score >= 40);

// // console.log(sudent.name, sudent.score);

// const newSet = new Set();

// newSet.add("car");
// newSet.add("ball");
// newSet.add("cap");

// console.log(newSet.size);

// for (const set of newSet) {
//   console.log(set.toUpperCase());
// }

// const a = [1, 2, 3, 4, 5, 5];
// const b = [1, 2, 3, 4, 5];

// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => B.has(num));
// let C = new Set(c);

// console.log(C);

// const des = [2, 3, 4, 5, 6, 7, 8];

// let [a, b, c, d, e, f, g, h] = des;

// console.log(a, b, c, d, e, f, g, h);
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// for (const [country] of countries) {
//   console.log(country);
// }

//Another Example
// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   job: "Instructor and Developer",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   languages: ["Amharic", "English", "Suomi(Finnish)"],
// };
// // Let us create a function which give information about the person object without destructuring

// let getPersonInfo = `${person.firstName + " " + person.lastName} he is ${
//   person.age
// } old `;

// console.log(getPersonInfo);

// // const getPersonInfo = (obj) => {
// //   const skills = obj.skills;
// //   const formattedSkills = skills.slice(0, -1).join(", ");
// //   const languages = obj.languages;
// //   const formattedLanguages = languages.slice(0, -1).join(", ");

// //   personInfo = `${obj.firstName} ${obj.lastName} lives in ${
// //     obj.country
// //   }. He is  ${obj.age} years old. He is an ${
// //     obj.job
// //   }. He teaches ${formattedSkills} and ${
// //     skills[skills.length - 1]
// //   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

// //   return personInfo;
// // };

// // console.log(getPersonInfo(person));

// // const names = ["Asabeneh", "Brook", "David", "John"];
// // let [secondPerson, fourthPerson, ...others] = names; // first and third person is omitted

// // console.log(secondPerson, fourthPerson, others);

// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/1/2020 8:30",
//     completed: true,
//   },
//   {
//     task: "Give JS Test",
//     time: "4/1/2020 10:00",
//     completed: false,
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/1/2020 1:00",
//     completed: false,
//   },
// ];

// for (const { task, time, completed } of todoList) {
//   console.log(time, completed, task);
// }

// const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = nums1;

// console.log(num1, num2, num3, ...rest);

// console.log(...rest);

// const evens = [0, 2, 4, 6, 8, 10];
// const evenNumbers = [...evens];

// const odds = [1, 3, 5, 7, 9];
// const oddNumbers = [...odds];

// const wholeNumbers = [...evens, ...odds];

// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(wholeNumbers);

// let frontend = ["html", "css", "js"];
// let backend = ["sql", "express", "node"];

// let fullStacl = [...frontend, ...backend];

// console.log(fullStacl);

// const arrys = [1, 2, 3, 4, 5, 6];

// const sum = (...arrys) => {
//   let sum = 0;
//   for (const arry of arrys) sum += arry;
//   return sum;
// };

// console.log(sum(arrys));

// const users = [
//   {
//     name: "Brook",
//     scores: 75,
//     skills: ["HTM", "CSS", "JS"],
//     age: 16,
//   },
//   {
//     name: "Alex",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "David",
//     scores: 75,
//     skills: ["HTM", "CSS"],
//     age: 22,
//   },
//   {
//     name: "John",
//     scores: 85,
//     skills: ["HTML"],
//     age: 25,
//   },
//   {
//     name: "Sara",
//     scores: 95,
//     skills: ["HTM", "CSS", "JS"],
//     age: 26,
//   },
//   {
//     name: "Martha",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "Thomas",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20,
//   },
// ];

// for (const { name, score, skills, age } of users) {
//   if (skills.length > 2) {
//     console.log(user);
//   }
// }

// // Partern / match

// const str = " i love javscript";
// const partern = /love/;
// partern.test(str) ? console.log(partern) : console.log("cant work");

// console.error("This is an error message");

// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// console.table(user);

// const users = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];
// console.table(users);

// try and catch in javascript

// try {
//   let name = "kenechukwu";
//   let fullName = name + " " + LastNae;
//   console.log(fullName);
// } catch (err) {
//   console.log('Name of the error', err.name)
//   console.log('Error message', err.message)
// } finally {
//   console.log("just show anyway s ");
// }

// async function asyncNew(loopSize) {
//   try {
//     async function result(loopSize) {
//       for (let i = 0; i <= loopSize; i++) console.log(i);

//       console.log("execution of async operation completed");
//     }
//     await result(loopSize);
//   } catch (error) {
//     console.error("Error Occurred:", error.message);
//   }
// }
// asyncNew(100);
// console.log("waiting for async operation to complete");

// const url = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error(error));

// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const countries = await response.json();
//     console.log(countries);
//   } catch (err) {
//     console.error(err);
//   }
// };
// console.log("===== async and await");
// fetchData();

// classes

// class ClassName {
//   constructor(FirstName, LastName) {
//     console.log(this);
//     this.FirstName = FirstName;
//     this.LastName = LastName;
//   }
// }

// const person = new ClassName("Kenechuwu", "nweke");

// console.log(person);

// const user = {
//   firstName: "Asabeneh",
//   age: 250,
//   skills: ["HTML", "CSS", "JS", "React"],
// };

// const userText = JSON.stringify(user, undefined, 4);
// localStorage.setItem("user", userText);

// //syntax
// let firstName = localStorage.getItem("firstName");
// let age = localStorage.getItem("age");
// let skills = localStorage.getItem("skills");
// console.log(firstName, age, skills);

// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ["html", "css", "js"];

//     if (skills.includes("css")) {
//       resolve("fullstack developer");
//     } else reject("something went wrong ");
//   }, 10);
// });

// doPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("promise loading....");

// fatching data from an Api

const url = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err));

// const square = async function (n) {
//   setTimeout((n) => {
//     return n * n;
//   }, 20000);
// };

// const wait = await console.log(square(2));

// console.log("awaiting ");

const data = async () => {
  try {
    const response = await fetch(url);
    const country = await response.json();
    console.log(country);
  } catch (err) {
    console.log(err);
  }
};

data();
