"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const atm_data_1 = require("./atm.data");
const atm_model_1 = require("./atm.model");
class Atm {
    constructor() {
        this.localDB = new atm_model_1.AccountList();
        this.localDB.accounts = atm_data_1.InitialData;
    }
    accountExists(acct) {
        return _.some(this.localDB.accounts, { 'accountNumber': acct });
    }
    getCurrentBalance(acct) {
        if (this.accountExists(acct)) {
            let result = _.filter(this.localDB.accounts, { 'accountNumber': acct });
            return result[0].currentBalance;
        }
        else {
            return -100; //not found
        }
    }
    withdraw(acct, amount) {
        if (this.accountExists(acct)) {
            let result = _.findIndex(this.localDB.accounts, { 'accountNumber': acct });
            this.localDB.accounts[result].currentBalance -= amount;
            let newTransaction = new atm_model_1.TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "Withdraw";
            this.transactionList.transactions.push(newTransaction);
            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100;
        }
    }
    deposit(acct, amount) {
        if (this.accountExists(acct)) {
            let result = _.findIndex(this.localDB.accounts, { 'accountNumber': acct });
            this.localDB.accounts[result].currentBalance += amount;
            let newTransaction = new atm_model_1.TransactionModel();
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "Deposit";
            this.transactionList.transactions.push(newTransaction);
            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100;
        }
    }
    getLastOperations(acct) {
        let result = new atm_model_1.TransactionList();
        if (this.accountExists(acct)) {
            result.transactions = _.filter(this.transactionList.transactions, { 'accountNumber': acct });
        }
        return result;
    }
}
exports.Atm = Atm;
