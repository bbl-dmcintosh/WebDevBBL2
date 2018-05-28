import { Component } from '@angular/core';
import { AtmserviceService } from './services/atmservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
  balance;
  amount;
  newBalance;
  txnAmt;
  date = new Date;

  constructor (public atmService : AtmserviceService){
    this.title = atmService.getPluto();
    this.balance = atmService.getAccountBalance();
    this.amount = atmService.getLastTransactionAmount();
    this.newBalance = atmService.withdrawMoney();
    this.newBalance = atmService.depositMoney();
    
  }
}