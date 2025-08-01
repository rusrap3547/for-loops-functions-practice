// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']
import { bankAccounts } from "../data/data";

export function getAllClientNames(input: string[]){
    return bankAccounts.map(input => input.name);
}