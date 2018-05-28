import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AtmoperationsComponent } from './components/atmoperations/atmoperations.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { MainopComponent } from './components/mainop/mainop.component';
import { AuthGuardService } from './services/auth-guard.service';

const myRoutes : Routes = [ 

    { path : 'auth' , component : AuthenticateComponent },

    { path : '' , redirectTo : '/auth', pathMatch : 'full' },

    { path : 'mainoperation' , component : MainopComponent, canActivate : [AuthGuardService],
    
    children: [
        
        { path : 'transactionlist' , component : TransactionListComponent, canActivateChild : [AuthGuardService],
            outlet : 'insideatm' },

        { path : 'operations' , component : AtmoperationsComponent, canActivateChild  : [AuthGuardService],
        outlet : 'insideatm' } 
    ]}, 

      
     
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            myRoutes
        )
    ],
    exports : [RouterModule]
})

export class AppRoutingModule { }