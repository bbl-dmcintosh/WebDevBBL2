import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import {AtmserviceService} from './services/atmservice.service';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AtmserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
