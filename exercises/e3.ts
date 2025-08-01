// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
*/

function getAverage(array: number[]){
    let sum:number = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    const average = sum / array.length;
    return average
}

console.log(getAverage([22, 45, 4, 65]));

/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * treat the character 'A' as the number 4
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

function getStringSum(input: string){
    let sum:number = 0;
    for(let i = 0; i < input.length; i++){
        const char = input[i];
        if(!isNaN(Number(char))){
            sum += Number(char);
        } else if (char === 'A'){
            sum += 4;
        }
    }
    return sum
}