console.log("am starting 30days of javascript again ");
let y = 10;
console.log(y);

let js = "javascript";

let py = "python";

console.log(js === py);

let num = [0, 1, 2, 3, 4];
num[0] = 12;
let number = num;

console.log(num == number);

// Math Objet
const PI = Math.PI;

console.log(Math.round(PI));
console.log(Math.floor(PI));

const _num = Math.random() * 11;
_num;
const total = Math.round(_num);
total;

console.log(js.toUpperCase());
// Excsise

const _name = "30 days of javascript";
console.log(_name.toUpperCase());

console.log(_name.substring(0, 1));
console.log(_name.replace("javascript", "python"));

const random = Math.random() * 100 + 1;

random;

const sentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const totall = sentence.match(/\d+/g);
totall;
