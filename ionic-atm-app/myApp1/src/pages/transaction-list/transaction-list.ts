import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { AtmTransaction } from '../../models/atm.interface';

@Component({
  selector: 'page-transaction-list',
  templateUrl: 'transaction-list.html'
})
export class TransactionListPage {

  transactions : Array<AtmTransaction> = [];

  constructor(public navCtrl: NavController,
  public atmService : AtmserviceProvider) {

  }

  ionViewWillEnter() {
    this.atmService.getLastOperations(this.atmService.getAccountNumber()).subscribe(data => {
      
      this.transactions = data.transactions;
      this.transactions[0].accountNumber;
      this.transactions[0].amount;

    });
  }

  goToDetails(item:AtmTransaction) {
    this.navCtrl.push("TransactionDetailPage", {item: item});
  }
}
