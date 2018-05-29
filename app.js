console.log('Working');
// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply () {

}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers

// 5. Write a function called 'reverseString' that returns the reverse a string

// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter

// 7. Write a function called 'removeOdd' that removes all ODD number from an array

// 8. Write a function called 'removeEven' that removes all EVEN number from an array

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
// function convertArrayToAnObject (arr) {
//   obj = {};
//   for (var i = 0; i < arr.length; i+=2) {
//
//   }
//   return obj;
// }


// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
function fizzBuzz (value) {
  switch (true) {
    case value % 3 == 0 && value % 5 == 0:
      return value = "FizzBuzz";
      break;
    case value % 5 == 0 && value % 3 != 0:
      return value = "Buzz";
      break;
    case value % 3 == 0 && value % 5 != 0:
      return value = "Fizz";
      break;
    default:
      return value;
  }
}

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".



// ----------------- Project Euler Tasks -----------------

// 1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// ---------- ATTEMPT 1 ------------
// function sumOfMultiples () {
//   // var num1 = 3;
//   // var num2 = 5;
//
//   for (var i = 0; i < 30; i = i + 3) {
//     console.log(i);
//     // var sum1 = num1 + i;
//     // return sum1;
//   }
//   for (var j = 0; j < 30; j+=5) {
//     console.log(j);
//     // var sum2 = num2 + j;
//     // return sum2;
//   }
// }
// ------------ ATTEMPT 2 --------------
var num1 = 0;
var num2 = 0;
var arr1 = [];
var arr2 = [];
var sum1 = 0;
var sum2 = 0;

for (var i = 0; i < 1000; i+=3) {
  arr1[i] = num1 + i;
  sum1+=arr1[i];
  // console.log(sum1);
}
for (var j = 0; j < 1000; j+=5) {
  arr2[j] = num2 + j;
  sum2+=arr2[j];
  // console.log(sum2);
}
var total = sum1 + sum2;
console.log(`This is the total: ${total}`);
// Answer is 266333
