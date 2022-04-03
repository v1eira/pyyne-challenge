import { BankController } from "../BankController";
import { IBankAccountDictionary } from "../interfaces/IBankAccountDictionary";

const accountId = 10;
const fromDate = new Date("2022-01-01");
const toDate = new Date("2022-04-04");

const Bank1Account = {
  accountBalance: { balance: 215.5, currency: "USD" },
  accountTransactions: [
    { amount: 100, type: 1, text: "Check deposit" },
    { amount: 25.5, type: 2, text: "Debit card purchase" },
    { amount: 225, type: 2, text: "Rent payment" },
  ],
};

const Bank2Account = {
  accountBalance: { balance: 512.5, currency: "USD" },
  accountTransactions: [
    { amount: 125, type: 0, text: "Amazon.com" },
    { amount: 500, type: 0, text: "Car insurance" },
    { amount: 800, type: 1, text: "Salary" },
  ],
};

/*
  Unit tests to check the behavior of the methods inside the class BankController.
*/

describe("BankController Test", () => {
  it("should call getAccountBalance method for different bank accounts", () => {
    const bankController = new BankController();
    const bankAccounts: IBankAccountDictionary = bankController.getBankAccounts();
    
    bankAccounts.bank1.getAccountBalance = jest.fn().mockReturnValue(Bank1Account.accountBalance);
    bankAccounts.bank2.getAccountBalance = jest.fn().mockReturnValue(Bank2Account.accountBalance);
    
    bankController.printBalances();
    expect(bankAccounts.bank1.getAccountBalance).toHaveBeenCalledWith(accountId);
    expect(bankAccounts.bank2.getAccountBalance).toHaveBeenCalledWith(accountId);
  });

  it("should call getAccountTransactions method for different bank accounts", () => {
    const bankController = new BankController();
    const bankAccounts = bankController.getBankAccounts();
    
    bankAccounts.bank1.getAccountTransactions = jest.fn().mockReturnValue(Bank1Account.accountTransactions);
    bankAccounts.bank2.getAccountTransactions = jest.fn().mockReturnValue(Bank2Account.accountTransactions);
    
    bankController.printTransactions();
    expect(bankAccounts.bank1.getAccountTransactions).toHaveBeenCalledWith(accountId, fromDate, toDate);
    expect(bankAccounts.bank2.getAccountTransactions).toHaveBeenCalledWith(accountId, fromDate, toDate);
  });
});