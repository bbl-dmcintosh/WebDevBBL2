import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AtmRespIF} from '../interface/atmrespinterface';

@Injectable()
export class AtmserviceService {

  constructor(public http: HttpClient){
    
  }

  getBalance(acct: string){
    return this.http.get("http://localhost:3000/atm" + acct);
  }
  
}
