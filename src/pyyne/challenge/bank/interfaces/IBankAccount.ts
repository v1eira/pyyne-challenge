import { IAccountBalance } from "./IAccountBalance";
import { IAccountTransaction } from "./IAccountTransaction";

export interface IBankAccount {
  getAccountBalance(accountId: number): IAccountBalance;
  getAccountTransactions(accountId: number, fromDate: Date, toDate: Date): IAccountTransaction[];
}