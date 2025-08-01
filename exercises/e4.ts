// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

function findMinValueInArray(input: number[] = []){
    let minValue: number = Infinity;
    for(let i = 0; i <= input.length; i++){
        if(input[i]<minValue ){
            let minValue = input[i];
        }
    }
    return minValue;
}

function findMaxValueInArray(input: number[] = []){
    let maxValue: number = -Infinity;
    for(let i = 0; i <= input.length; i++){
        if(input[i]>maxValue){
            let maxValue = input[i];
        }
    }
    return maxValue;
}