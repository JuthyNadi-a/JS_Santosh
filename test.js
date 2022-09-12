/* return console sequence */

function sum(x, y) {
    return x + y;
    console.log(sum(1, 3));//this will not run inside the function
}

console.log(sum(1, 3));
/* length */
let text = "programming JS"
console.log(text.length);

console.log("nadia Jahan Juthy".length);

/* Upper and lower case */

console.log("NADIA".toLowerCase());
console.log("juthy".toUpperCase());

/* character access */

console.log("Nadia"[3]);

/* character length access */

let language="Javascript";
console.log(language[language.length-4]);

/* substring */

console.log(language.substring(4, 7));

/* Plus operator */

let firstName = "Nadia";
let lastName = "Juthy";

console.log(firstName + " " + lastName);

/* plus operator */

let midName = "Jahan";
midName += " Juthy";
console.log(midName);

/* map , join */
const users = [
    {    id: 1,    name: "Sam Doe"}, 
    {    id: 2,    name: "Alex Blue"}
];
const userNamesArray = users.map(user => user.name);
console.log(userNamesArray); 
// ["Sam Doe", "Alex Blue"];const csv = userNamesArray.join(", ");console.log(csv); // "Sam Doe, Alex Blue"

const csv = users.map(user => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"

/* every() */
const numbers = [15, 10, 20];
const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false

/* some() */
const numbers1 = [15, 10, 20];
const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false