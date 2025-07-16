
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
//  * */

export function getAverage(array) {
  // Your code goes here...
  const numbers = array;
  let sum = 0; 
  for (let index = 0; index < numbers.length; index++){
    console.log( sum , numbers[index])
       sum = sum + numbers[index]
  }
  console.log(sum);
  return sum / numbers.length
 
}
console.log(getAverage([22, 45, 4, 65]));

/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * treat the character 'A' as the number 4
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

/* VALID SOLUTION*/
// export function getStringSum(str) {
//   // Your code goes here...
//   const items = str.split('');
//   const numberGroup = []
//   console.log(items);
//   for (let item of items){
//     if (!isNaN(item)){
//       numberGroup.push(item);
//     }
//   }
//   console.log(numberGroup);
//   // return numberGroup;
//   let sum = 0;
//   for (let index = 0; index < numberGroup.length; index++){
//     sum = sum + parseInt(numberGroup[index]);
//   }
//   return sum;
// }

export function getStringSum(str) {
  // Your code goes here...
  const items = str.split('');
  let sum = 0;
  for (let item of items){
    if (!isNaN(item)){
      sum += parseInt(item);
    }
  }
  return sum;
}

console.log(getStringSum('S2uper3Test4'));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
