// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts } from "../data/data";

function getClientWithLeastBalance(array: number[]){
    const nonZeroAccounts = bankAccounts.filter(account => account.balance > 0)
    if (nonZeroAccounts.length === 0){
        return[];
    }
    let lowest = nonZeroAccounts[0];
    for (let i = 1; i <nonZeroAccounts.length; i++) {
        if (nonZeroAccounts[i].balance < lowest.balance){
            lowest = nonZeroAccounts[i];
        }
    }
    return[lowest];
}