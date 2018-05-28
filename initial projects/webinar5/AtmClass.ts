import {AtmInterface} from './AtmInterface';

export class Atm implements AtmInterface {

initialBalance : number;
currentBalance : number;
amount         : number; 
accountNumber  : string;

constructor(){

}

setBalance(acc: string, balance: number) : void {
    this.accountNumber = acc;
    this.initialBalance = balance;
    this.currentBalance = balance;
}

withdraw(acc: string, amount: number) : void {
    if(acc == this.accountNumber){
        this.currentBalance = this.currentBalance - amount;
    }else{
        console.log(`Incorrect account number`);
    }
}

deposit(acc: string, amount: number) : void {
    if(acc == this.accountNumber){
        this.currentBalance = this.currentBalance + amount;
    }else{
        console.log('Incorrect account number');
    }
}

showBalance(acc: string) : void {
    console.log(`-----------------------`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Available Balance: ${this.currentBalance}`);
    console.log(`-----------------------`);
}

closeOperation() : void {
    this.initialBalance = this.currentBalance;
}
   
}