import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtmInterface }  from '../interfaces/atm.interface';

@Injectable()
export class AtmserviceService {

  private URLEP = "http://localhost:3000/atm/";

  constructor(public http: HttpClient) { }

  isAlive(){
    return this.http.get<AtmInterface>(this.URLEP);
  }
  getCurrentBalance(acct: string){
    return this.http.get<AtmInterface>(this.URLEP + acct);
  }

  withdraw(acct: string, amount: number){
    return this.http.get<AtmInterface>(this.URLEP + "withdraw/" + acct + "/amount/" + amount);
  }

  deposit(acct: string, amount: number){
    return this.http.get<AtmInterface>(this.URLEP + "deposit/" + acct + "/amount/" + amount);
  }

  getLastOperations(acct: string){
    return this.http.get<AtmInterface>(this.URLEP + "transactions/" + acct + "/");
  }

}
