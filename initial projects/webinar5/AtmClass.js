"use strict";
exports.__esModule = true;
var Atm = /** @class */ (function () {
    function Atm() {
    }
    Atm.prototype.setBalance = function (acc, balance) {
        this.accountNumber = acc;
        this.initialBalance = balance;
        this.currentBalance = balance;
    };
    Atm.prototype.withdraw = function (acc, amount) {
        if (acc == this.accountNumber) {
            this.currentBalance = this.currentBalance - amount;
        }
        else {
            console.log("Incorrect account number");
        }
    };
    Atm.prototype.deposit = function (acc, amount) {
        if (acc == this.accountNumber) {
            this.currentBalance = this.currentBalance + amount;
        }
        else {
            console.log('Incorrect account number');
        }
    };
    Atm.prototype.showBalance = function (acc) {
        console.log("-----------------------");
        console.log("Account Number: " + this.accountNumber);
        console.log("Available Balance: " + this.currentBalance);
        console.log("-----------------------");
    };
    Atm.prototype.closeOperation = function () {
        this.initialBalance = this.currentBalance;
    };
    return Atm;
}());
exports.Atm = Atm;
