import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperationBalance } from '../../models/atm.interface';
import { FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-mainop',
  templateUrl: './mainop.component.html',
  styleUrls: ['./mainop.component.css']
})
export class MainopComponent implements OnInit {

  public withdrawForm: FormGroup;
  public depositForm: FormGroup;

  public currentCard : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};

 
  constructor(public router : Router, 
               public atmService : AtmServiceService) { }

  ngOnInit() {
    this.withdrawForm = new FormGroup({
      withdrawAmount : new FormControl('',Validators.required)
  }
  );

  this.depositForm = new FormGroup({
    depositAmount : new FormControl('',Validators.required)
}
);

    this.atmService.getCurrentBalance(this.atmService.getAccountNumber()).
         subscribe (data => {
             this.currentCard = data;     
         });

    this.atmService.onUpdatedTransactions$.subscribe(ok=>{

          this.atmService.getCurrentBalance(this.atmService.getAccountNumber()).
               subscribe (data => {
                   this.currentCard = data;     
          });      
    })
      
  }

  goToTransactionList() {
      this.router.navigate([{outlets: {insideatm:['transactionlist',{op:true}]}}]);
   }

   goToMakeADeposit() {
       this.router.navigate([{outlets: {insideatm:['operations',{ arg : 'deposit' }]}}]);
   }

   goToMakeAWithdrawl() {
    this.router.navigate([{outlets: {insideatm:['operations',{ arg: 'withdrawl' }]}}]);
}

  logOff(){

    this.atmService.logOff();
    this.router.navigate(['/auth']);
  
  }

}
