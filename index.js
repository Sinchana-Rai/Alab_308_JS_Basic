// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//   ----------------    Part one    -----------------------
// Check if all numbers are divisible by 5. 
// let result1 = (n1 % 5) === 0
// // console.log(result1)
// console.log(`'n1' is assigned a value of "${n1}," and is divisible by 5. 
// Result is ${result1}`);

// let result2 = (n2 % 5) === 0
// console.log(result2)
// console.log(`'n2' is assigned a value of "${n2}," and is divisible by 5. 
//   Result is ${result2}`);

// let result3 = (n3 % 5) === 0
// console.log(result3)
// console.log(`'n3' is assigned a value of "${n3}," and is divisible by 5. 
//   Result is ${result3}`);

// let result4 = (n3 % 5) === 0
// console.log(result4)
// console.log(`'n4' is assigned a value of "${n4}," and is divisible by 5. 
//   Result is ${result4}`);


//  ---------------------------- SECOND --------------------
//Check if the first number is larger than the last. Cache the result in a variable.
// let  isFirstNumberlarger = (n1 > n4)
// console.log(isFirstNumberlarger)
// console.log(`'n1' is assigned a value of "${n1}," and 'n4' is assigned the value of "${n4}". Is 'n1' larger than 'n4':
//   Result is ${isFirstNumberlarger}`);



//  ---------------------------- THIRD --------------------
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number

// let myResult = (n2 - n1 ) * n3;
// // console.log(myResult);

// let findRemainder = (myResult / n4);
// // console.log(findRemainder)
// console.log(`'n1' is assigned a value of "${n1},", 'n2' is assigned the value of "${n2}, 'n3' is assigned the value of ${n3} and 'n4' is assigned the value of "${n4}".The value of the formula ((n2-n1)*n3)/n4 is: ${findRemainder}`);




    // ------------------------ Fourth -----------------

//     Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in
// other logic comparisons. Rename the variable as appropriate.

// const isOver25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);

// const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) 

