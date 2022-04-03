export class Bank1Transaction {

  public static TYPE_CREDIT: number = 1;
  public static TYPE_DEBIT: number = 2;

  constructor(
    private amount: number,
    private type: number,
    private text: string,
  ) {}

  public getAmount(): number {
    return this.amount;
  }

  public getType(): number {
    return this.type;
  }

  public getText(): string {
    return this.text;
  }


}
