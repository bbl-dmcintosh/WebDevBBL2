import { Injectable } from '@angular/core';

@Injectable()
export class AtmserviceService {

  pluto : string;
  balance : number;
  amount : number;
  newBalance : number;
  txnAmt : number;
  constructor() 
  {
      this.pluto = "Hello World...from Dave's service";
      this.balance = 10000000.00;
      this.newBalance = 0;
      this.txnAmt = 200;
  }

  getPluto(){
    return this.pluto;
  }

  getAccountBalance(){
    return this.balance;
  }

  getLastTransactionAmount(){
    return this.txnAmt
  }

  withdrawMoney(){
    this.newBalance = this.balance - this.txnAmt;
    return this.newBalance;
  }

  depositMoney(){
    this.newBalance = this.balance + this.txnAmt;
    return this.newBalance;
  }

}
