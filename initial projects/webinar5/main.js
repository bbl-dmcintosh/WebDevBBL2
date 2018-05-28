"use strict";
exports.__esModule = true;
var AtmClass_1 = require("./AtmClass");
var atm = new AtmClass_1.Atm();
var acctNum = "14431010230002";
atm.setBalance(acctNum, 600);
atm.showBalance(acctNum);
