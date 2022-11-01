import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminentryComponent } from './admin/adminentry/adminentry.component';
import { LoginComponent } from './login/login.component';
import { UserentryComponent } from './user/userentry/userentry.component';
import { LoanapplicationComponent } from './loan/loanapplication/loanapplication.component';
import { LoandetailsComponent } from './loan/loandetails/loandetails.component';
import { CustomerentryComponent } from './customer/customerentry/customerentry.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';


const routes: Routes = [
  {path: '', redirectTo:'/userlogin',pathMatch:'full'},
  {path: 'userentry', component: UserentryComponent},
  {path: 'userlogin', component: LoginComponent},
  {path:'adminregistration',component:AdminentryComponent},
  {path:'loanapplication',component:LoanapplicationComponent},
  {path:'loandetails',component:LoandetailsComponent},
  {path:'customerregistration',component:CustomerentryComponent},
  {path:'customerhome',component:CustomerhomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
