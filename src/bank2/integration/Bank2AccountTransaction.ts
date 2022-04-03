export enum TRANSACTION_TYPES {
  DEBIT, CREDIT
}

export class Bank2AccountTransaction {

  constructor(
    private amount: number,
    private type: TRANSACTION_TYPES,
    private text: string,
  ) {}

  public getAmount(): number {
    return this.amount;
  }

  public getType(): TRANSACTION_TYPES {
    return this.type;
  }

  public getText(): string {
    return this.text;
  }


}
