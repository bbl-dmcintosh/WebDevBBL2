import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SayLightComponent } from './say-light/say-light.component';
import { SayDynamicBoldComponent } from './say-dynamic-bold/say-dynamic-bold.component';

const appRoutes : Routes = [
    { path: 'light/:theme', component: SayLightComponent},
    { path: 'dark/:theme', component: SayDynamicBoldComponent}
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports : [RouterModule]
})

export class AppRoutingModule { }