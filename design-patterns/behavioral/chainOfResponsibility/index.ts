import { Bank, Bitcoin, Paypal } from './account';

const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

// setting up the chain
bank.setNext(paypal);
paypal.setNext(bitcoin);

// use the service
bank.pay(250);
bank.pay(140);
