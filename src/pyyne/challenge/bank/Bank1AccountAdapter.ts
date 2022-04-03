import { Bank1AccountSource } from "../../../bank1/integration/Bank1AccountSource";
import { IBankAccount } from "./interfaces/IBankAccount";
import { IAccountBalance } from "./interfaces/IAccountBalance";
import { IAccountTransaction } from "./interfaces/IAccountTransaction";

export class Bank1AccountAdapter implements IBankAccount {

  constructor(
    private bankAccount: Bank1AccountSource,
  ) {}

  public getAccountBalance(accountId: number): IAccountBalance {
    const balance = this.bankAccount.getAccountBalance(accountId);
    const currency = this.bankAccount.getAccountCurrency(accountId);

    return { balance, currency };
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