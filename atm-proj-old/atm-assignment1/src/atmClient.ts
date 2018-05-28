import {Atm} from './atm/atm';

let atmInstance : Atm = new Atm();
let balance = 0.00;
let accountToQuery = '9999-1';
let result : any;

balance = atmInstance.getCurrentBalance(accountToQuery);
console.log('Balance for account, ' + accountToQuery + ' = $' + balance);

balance = atmInstance.withdraw(accountToQuery, 50.00);
console.log('Balance for account, ' + accountToQuery + ' = $' + balance + 'after withdrawal.');

balance = atmInstance.deposit(accountToQuery, 100.00);
console.log('Balance for account, ' + accountToQuery + ' = $' + balance + 'after deposit.');

result = atmInstance.getLastOperations(accountToQuery).transactions;
console.log("Transaction Listing for Account: " + accountToQuery);
console.log(result);
