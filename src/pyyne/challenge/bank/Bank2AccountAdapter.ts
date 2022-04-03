import { Bank2AccountSource } from "../../../bank2/integration/Bank2AccountSource";
import { IBankAccount } from "./interfaces/IBankAccount";
import { IAccountBalance } from "./interfaces/IAccountBalance";
import { IAccountTransaction } from "./interfaces/IAccountTransaction";

export class Bank2AccountAdapter implements IBankAccount {

  constructor(
    private bankAccount: Bank2AccountSource,
  ) {}

  public getAccountBalance(accountId: number): IAccountBalance {
    const accountBalance = this.bankAccount.getBalance(accountId);

    return { balance: accountBalance.getBalance(), currency: accountBalance.getCurrency() };
  }
  
  public getAccountTransactions(accountId: number, fromDate: Date, toDate: Date): IAccountTransaction[] {
    const transactionList = this.bankAccount.getTransactions(accountId, fromDate, toDate);

    const accountTransactions: IAccountTransaction[] = transactionList.map(accountTransaction => {
      const transaction: IAccountTransaction = {
        amount: accountTransaction.getAmount(),
        type: accountTransaction.getType(),
        text: accountTransaction.getText(),
      };

      return transaction;
    })

    return accountTransactions;
  }

}