export class Bank2AccountBalance {

  constructor(
    private balance: number,
    private currency: string,
  ) {}

  public getBalance(): number {
    return this.balance;
  }

  public getCurrency(): string {
    return this.currency;
  }
}
