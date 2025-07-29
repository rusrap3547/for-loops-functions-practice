
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }
import { bankAccounts } from "../data/data";

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  const accounts = bankAccounts.filter(account => account.balance > 0)

  let richestGuy = array[0];

  for (let i = 0; i <= accounts.length; i++){
    if(array[i].balance > richestGuy)
      richestGuy = array[i];
  }
  return [richestGuy.name];
}

console.log(getClientWithGreatestBalance(bankAccounts));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
