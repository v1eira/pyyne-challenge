import { Bank1AccountSource } from "../../../../bank1/integration/Bank1AccountSource";
import { Bank1AccountAdapter } from "../Bank1AccountAdapter";

const accountId = 100;
const fromDate = new Date("2021-10-26");
const toDate = new Date("2021-10-31");

const accountBalance = { balance: 215.5, currency: "USD" };

const accountTransactions = [
  { amount: 100, type: 1, text: "Check deposit" },
  { amount: 25.5, type: 2, text: "Debit card purchase" },
  { amount: 225, type: 2, text: "Rent payment" },
];

/*
  Unit tests to check the behavior of the methods inside the class Bank1AccountAdapter.
*/

describe("Bank1AccountAdapter Test", () => {
  it("should return balance information from a Bank1Account", () => {
    const bank1AccountAdapter = new Bank1AccountAdapter(new Bank1AccountSource());
    const bank1AccountBalance = bank1AccountAdapter.getAccountBalance(accountId);
    
    expect(bank1AccountBalance).toEqual(accountBalance);
  });

  it("should return transactions from a Bank1Account", () => {
    const bank1AccountAdapter = new Bank1AccountAdapter(new Bank1AccountSource());
    const bank1AccountTransactions = bank1AccountAdapter.getAccountTransactions(accountId, fromDate, toDate);
    
    expect(bank1AccountTransactions).toEqual(accountTransactions);
  });
})