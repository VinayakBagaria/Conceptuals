abstract class Account {
  balance: number;
  successor: Account | null;

  constructor(balance: number) {
    this.balance = balance;
    this.successor = null;
  }

  public setNext(account: Account) {
    this.successor = account;
  }

  public pay(amountToPay: number) {
    if (this.canPay(amountToPay)) {
      console.log(`Paid ${amountToPay} via ${this.constructor.name}`);
    } else if (this.successor) {
      this.successor.pay(amountToPay);
    } else {
      throw new Error('None of the accounts have enough balance');
    }
  }

  private canPay(amount: number): boolean {
    return this.balance >= amount;
  }
}

export class Bank extends Account {}

export class Paypal extends Account {}

export class Bitcoin extends Account {}
