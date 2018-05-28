import {TransactionList} from './atm.model';
export interface AtmInterface {

    deposit(acct: string, amount: number) : number;
    withdraw(acct: string, amount: number) : number;
    getCurrentBalance(acct: string) : number;
    getLastOperations(acct: string) : TransactionList;
    accountExists(acct: string) : boolean;
}