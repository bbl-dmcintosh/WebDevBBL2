import {TransactionList} from '../atm/atm.model';
export interface AtmInterface {

    status          : string,
    message         : string,
    accountNumber   : string,
    currentBalance  : number,
    transactions    : TransactionList;

}

