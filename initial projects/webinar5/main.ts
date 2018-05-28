import {Atm} from './AtmClass';

var atm : Atm = new Atm();

let acctNum = "14431010230002";

atm.setBalance(acctNum,600);
atm.showBalance(acctNum);

