/* 1. Implement the function canVote such that it returns true whenever the age 18 or above and false in all other scenarios.*/

/* let age = 23;
function canVote() {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
canVote(); */

/* 2. Implement the function canVote such that it returns true whenever the age 18 or above and false in all other scenarios. You should not use an if condition(or ternary). */

/* let ageNow = 25;

function canVote() {
    while (age >= 18) {
        return true;
    }
    return false;
}
canVote(); */

/* 3. Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise. Can you make it work with negative numbers too? */

/* let number = Number(prompt("Enter number"));
function evenOrOdd() {
    if(number%2 == 0){
        return "even"
    } return "odd"
}
evenOrOdd(); */

/* 4. Write a function named greaterNum that: takes 2 arguments, both numbers. returns whichever number is the greater (higher) number. Call that function 2 times with different number pairs, and log the output to make sure it works(e.g. "The greater number of 5 and 10 is 10.”). */


/* function greaterNum(num1, num2){
    if (num1 > num2) {
        return num1
    }
        return num2
}

console.log(greaterNum(10,11));
console.log(greaterNum(109,110)); */

/* 5. Write a function named assignGrade that: takes 1 argument, a number score. returns a grade for the score, either "A", "B", "C", "D", or “F". Call that function for a few different scores and log the result to make sure it works. */

/* function assignGrade(grade) {
    if (grade >= 80 && grade <= 100) {
        return "A" 
    } else if (grade >=70 && grade <=79){
        return "B"
    }else if (grade >=60 && grade <=69){
        return "C"
    } else if (grade >=50 && grade <=59){
        return "D"
    }
        return "F"
}
console.log(assignGrade(43));
console.log(assignGrade(53));
console.log(assignGrade(63));
console.log(assignGrade(73));
console.log(assignGrade(83));
 */
/* 6. Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog”. Call that function for a few different scores and log the result to make sure it works. Bonus: Make it handle a few collective nouns like "sheep" and “geese". */

function pluralize(noun, num) {
    if(num>1){
        return `${num} ${noun}s`
    } return `${num} ${noun}`
}
console.log(pluralize("bat", 5));
console.log(pluralize("cat", 1));
console.log(pluralize("rat", 2));
