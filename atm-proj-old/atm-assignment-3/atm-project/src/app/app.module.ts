import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { AtmserviceService } from './services/atmservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AtmserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
