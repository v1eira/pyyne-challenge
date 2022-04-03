import { Bank2AccountSource } from "../../../../bank2/integration/Bank2AccountSource";
import { Bank2AccountAdapter } from "../Bank2AccountAdapter";

const accountId = 100;
const fromDate = new Date("2021-10-26");
const toDate = new Date("2021-10-31");

const accountBalance = { balance: 512.5, currency: "USD" };

const accountTransactions = [
  { amount: 125, type: 0, text: "Amazon.com" },
  { amount: 500, type: 0, text: "Car insurance" },
  { amount: 800, type: 1, text: "Salary" },
];

/*
  Unit tests to check the behavior of the methods inside the class Bank2AccountAdapter.
*/

describe("Bank2AccountAdapter Test", () => {
  it("should return balance information from a Bank2Account", () => {
    const bank2AccountAdapter = new Bank2AccountAdapter(new Bank2AccountSource());
    const bank2AccountBalance = bank2AccountAdapter.getAccountBalance(accountId);
    
    expect(bank2AccountBalance).toEqual(accountBalance);
  });

  it("should return transactions from a Bank2Account", () => {
    const bank2AccountAdapter = new Bank2AccountAdapter(new Bank2AccountSource());
    const bank2AccountTransactions = bank2AccountAdapter.getAccountTransactions(accountId, fromDate, toDate);
    
    expect(bank2AccountTransactions).toEqual(accountTransactions);
  });
})