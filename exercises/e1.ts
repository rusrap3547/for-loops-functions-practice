
// EXERCISE 1
// Return an array of numbers in 1..10
// getFirstTenNumbers() => [1, 2, 3, ... , 10]

function getFirstTenNumbers(): number[] {
    const numbers: number[] = [];
    for(let i = 0; i < 10; i++) {
        numbers.push(i);
    }
    return numbers;
}