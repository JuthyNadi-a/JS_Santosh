'use strict';

/**
Complete the function multiplyNumbers such that it multiplies every number from the numbers parameter it receives.
/**
 *
 */

 /**
  * @param {number[]} numbers
  */
 const multiplyNumbers = numbers => {
    return numbers.reduce((total,current) => {
        return total * current;
    },1);
 }
 /* one liner */
 
 const multiplyNumbers1 = numbers => {
    return numbers.reduce((total,current) => total * current);
 }

 // Sample usage - do not modify
 console.log(multiplyNumbers1([10, 20, 30])) // 6000
 console.log(multiplyNumbers([2, 4, 2, 10])) // 160
