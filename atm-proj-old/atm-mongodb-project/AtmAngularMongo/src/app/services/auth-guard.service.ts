import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AtmServiceService } from './atm-service.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(public router : Router, public atmService : AtmServiceService) { }

  canActivate() {

    if (!this.atmService.accountValid) {
      console.log("unauthorized!");
      this.router.navigate(['/auth']);
      return false;
    }else{
      console.log("authorized!");
      return true;
    }   
  }

  canActivateChild() {

    if (!this.atmService.accountValid) {
      console.log("unauthorized!");
      this.router.navigate(['/auth']);
      return false;
    }else{
      console.log("authorized!");
      return true;
    }
  }
}
