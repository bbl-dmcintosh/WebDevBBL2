import { Component } from '@angular/core';
import { AtmRespIF } from './interface/atmrespinterface';
import {AtmserviceService} from './services/atmservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atm App';
  balance = 0;
  account = '';
  respNice : AtmRespIF;

  constructor (public atmService: AtmserviceService){
    atmService.getBalance('').subscribe(value => {
      this.balance = 100;
  
    })
  }
  
}
