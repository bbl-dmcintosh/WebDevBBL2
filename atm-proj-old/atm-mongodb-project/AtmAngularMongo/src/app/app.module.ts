/*
  Instructor : Mario Estrada Rosa
  Email  : marioestrada@eycgrupo.com
  Date   : April 2018
  Class  : Introduction to Angular Framework
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AtmServiceService } from './services/atm-service.service';
//new auth guard service
import { AuthGuardService } from './services/auth-guard.service';

import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './components/atmoperations/atmoperations.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { componentFactoryName } from '@angular/compiler';
import { MainopComponent } from './components/mainop/mainop.component';

//import routing module
import { AppRoutingModule } from './routing.module';

//import reactive forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    AtmoperationsComponent,
    AuthenticateComponent,
    MainopComponent
  ],
  
  imports: [
    BrowserModule  ,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  //We have to import the service as a provider in the NGModule ecosystem
  //otherwise it won´t be available in the Angular Application
  providers: [AtmServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
