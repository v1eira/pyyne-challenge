import { BankController } from "./pyyne/challenge/bank/BankController";

const bankController = new BankController();

console.log("--- PRINT BALANCES ---");
bankController.printBalances();
console.log("\n\n");
console.log("--- PRINT TRANSACTIONS ---");
bankController.printTransactions();