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