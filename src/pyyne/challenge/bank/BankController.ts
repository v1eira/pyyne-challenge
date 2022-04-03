import { Bank1AccountSource } from "../../../bank1/integration/Bank1AccountSource";
import { Bank2AccountSource } from "../../../bank2/integration/Bank2AccountSource";
import { Bank1AccountAdapter } from "./Bank1AccountAdapter";
import { Bank2AccountAdapter } from "./Bank2AccountAdapter";
import { IBankAccountDictionary } from "./interfaces/IBankAccountDictionary";

export class BankController {

  private bankAccounts: IBankAccountDictionary = {
    bank1: new Bank1AccountAdapter(new Bank1AccountSource()),
    bank2: new Bank2AccountAdapter(new Bank2AccountSource()),
  }

  private accountId: number = 10;
  private fromDate: Date = new Date("2022-01-01");
  private toDate: Date = new Date("2022-04-04");

  public printBalances(): void {
    for (const key in this.bankAccounts) {
      if (Object.prototype.hasOwnProperty.call(this.bankAccounts, key)) {
        const accountBalance = this.bankAccounts[key].getAccountBalance(this.accountId);
        console.log(key);
        console.log(`${accountBalance.balance} ${accountBalance.currency}`);
      }
    }
  }

  public printTransactions(): void {
    for (const key in this.bankAccounts) {
      if (Object.prototype.hasOwnProperty.call(this.bankAccounts, key)) {
        const accountTransactions = this.bankAccounts[key].getAccountTransactions(this.accountId, this.fromDate, this.toDate);
        console.log(key);
        accountTransactions.map((transaction) => console.log(transaction));
      }
    }
  }

  public getBankAccounts(): IBankAccountDictionary {
    return this.bankAccounts;
  }
}
