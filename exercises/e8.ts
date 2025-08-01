import { bankAccounts } from "../data/data";

// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }
/**
 *
 * @param bankAccounts array of bank accounts
 * @returns  an array with a bank account object with the greatest balance value
 */
function getClientWithGreatestBalance(bankAccounts: BankAccount[]): BankAccount[] {
    if (!bankAccounts || bankAccounts.length === 0) {
        return [];
    }

    let greatestBalance = bankAccounts[0].balance;
    let clientWithGreatestBalance = [bankAccounts[0]];

    for (let i = 1; i < bankAccounts.length; i++) {
        if (bankAccounts[i].balance > greatestBalance) {
            greatestBalance = bankAccounts[i].balance;
            clientWithGreatestBalance = [bankAccounts[i]];
        } else if (bankAccounts[i].balance === greatestBalance) {
            clientWithGreatestBalance.push(bankAccounts[i]);
        }
    }

    return clientWithGreatestBalance;
}