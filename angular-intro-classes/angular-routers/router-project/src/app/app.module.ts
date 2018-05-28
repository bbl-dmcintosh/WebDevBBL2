import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SayLightComponent } from './say-light/say-light.component';
import { SayDynamicBoldComponent } from './say-dynamic-bold/say-dynamic-bold.component';
import { AppRoutingModule } from './routing.module';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SayLightComponent,
    SayDynamicBoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
