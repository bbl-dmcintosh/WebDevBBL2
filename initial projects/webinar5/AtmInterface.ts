export interface AtmInterface{
    //variable definition

    initialBalance           : number,
    currentBalance            : number,
    accountNumber             : string,
    amount                    : number,

    //method definition

    setBalance(account: string, balance : number) : void,
    withdraw(account: string,   amount  : number) : void, 
    deposit(account: string,    amount  : number) : void,
    showBalance(account: string)                  : void,
    closeOperation() : void;
}