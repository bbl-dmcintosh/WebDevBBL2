import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController} from  'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';


/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {

  depositForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public atmserviceProvider : AtmserviceProvider, public alertCtrl: AlertController,
    public toastCtrl : ToastController, public loadCtrl : LoadingController) {
      
      this.depositForm = new FormGroup({
        amount : new FormControl('', Validators.required),
      });

  }

  makeADeposit(){

    let confirm = this.alertCtrl.create({
      title: 'Deposit Confirmation',
      message: 'Are you sure you want to perform the deposit?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.pop();
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');

            let loader = this.loadCtrl.create({content: 'Submitting'});
            loader.present();

            let amount = this.depositForm.get("amount").value;
            let accountNumber = this.atmserviceProvider.getAccountNumber();

            this.atmserviceProvider.deposit(accountNumber, amount).then (
              (succ) => {
              loader.dismiss();
              let depositAlert = this.alertCtrl.create({
                  title: 'Deposit Successful',
                  subTitle: "Account Number:" + accountNumber,
                  buttons: ['OK']
              });
              depositAlert.present();
              this.navCtrl.pop();
              }, 
              (err) => {
                let toast = this.toastCtrl.create({message: "Deposit Unsuccessful!", duration: 3000});
                loader.dismiss();
                toast.present();
                this.navCtrl.pop();
              }
            );
          }
        }
      ]
    });
    confirm.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }

}
