// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

import { bankAccounts } from "../data/data";

function getClientWithNoMoney(accounts: { name: string; balance: number }[]): string[] {
  const poorPeople = accounts
    .filter((account) => account.balance === 0)
    .map((account) => account.name);
  return poorPeople;
}