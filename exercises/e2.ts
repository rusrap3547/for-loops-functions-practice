// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

function getNumbersWithSquareRoots(target:number): number[] {
    const sqrtNumbers:number[] = [];
    for(let i = 0; i < target; i++){
        if (Number.isInteger(Math.sqrt(i))) {
            sqrtNumbers.push(i)
        }
    }
    return sqrtNumbers;
}

getNumbersWithSquareRoots(17);