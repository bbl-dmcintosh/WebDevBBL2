import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentBalance : number = 0;

  constructor(public navCtrl: NavController,
  public atmService : AtmserviceProvider) {

  }

  ionViewCanEnter() : boolean {
    return this.atmService.accountValid;
  }

  getAccountName() : string {
    return this.atmService.accountName;
  }

  getCurrentBalance() {
    return this.atmService.getCurrentBalance(this.atmService.accountNumber);
  }

  ionViewWillEnter() {
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
      this.currentBalance = resp.currentBalance;
      this.atmService.accountName = resp.accountName;
    });
  }

  goToDeposit() {
    this.navCtrl.push("DepositPage");
  }

  goToWithdrawal() {
    this.navCtrl.push("WithdrawPage");
  }

}


