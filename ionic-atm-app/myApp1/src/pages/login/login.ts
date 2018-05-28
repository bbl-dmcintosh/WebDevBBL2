import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { AtmserviceProvider} from '../../providers/atmservice/atmservice';
import { AlertController} from  'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
  public atmserviceProvider: AtmserviceProvider, public loadCtrl : LoadingController,
public toastCtrl : ToastController) {
  
    this.myForm = new FormGroup({
      accountNumber : new FormControl('', Validators.required),
      pinNumber : new FormControl('', Validators.required)
    });
  }

  doLogin(){

    let loader = this.loadCtrl.create({content: 'Authenticating'});
    loader.present();

    let accountNumber= this.myForm.get("accountNumber").value;
    let pinNumber= this.myForm.get("pinNumber").value;

    this.atmserviceProvider.setAccountNumber(accountNumber, pinNumber).then (
      (succ) => {
        loader.dismiss();
        let myAlert = this.alertCtrl.create({
          title: 'Form Submitted',
          subTitle: "Account Number:" + accountNumber,
          buttons: ['OK']
        });
        myAlert.present();
        this.navCtrl.push(TabsPage);
      }, 
      (err) => {
        let toast = this.toastCtrl.create({message: "invalid credentials", duration: 3000});
        loader.dismiss();
        toast.present();
      }
    ) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
