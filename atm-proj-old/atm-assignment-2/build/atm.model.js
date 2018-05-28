"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountModel {
}
exports.AccountModel = AccountModel;
class AccountList {
    constructor() {
        this.accounts = [];
    }
}
exports.AccountList = AccountList;
class TransactionModel {
    constructor() {
        this.transactionDate = new Date();
    }
}
exports.TransactionModel = TransactionModel;
class TransactionList {
    constructor() {
        this.transactions = [];
    }
}
exports.TransactionList = TransactionList;
