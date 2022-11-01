import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminlistingComponent } from './admin/adminlisting/adminlisting.component';
import { AdminuserviewComponent } from './admin/adminuserview/adminuserview.component';
import { AdminloanofficerviewComponent } from './admin/adminloanofficerview/adminloanofficerview.component';
import { UserComponent } from './user/user.component';
import { UserentryComponent } from './user/userentry/userentry.component';
import { LoanofficerComponent } from './loanofficer/loanofficer.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { LoanofficerhomeComponent } from './loanofficer/loanofficerhome/loanofficerhome.component';
import { LoanapplicationComponent } from './loan/loanapplication/loanapplication.component';
import { LoandetailsComponent } from './loan/loandetails/loandetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminlistingComponent,
    AdminuserviewComponent,
    AdminloanofficerviewComponent,
    UserComponent,
    UserentryComponent,
    LoanofficerComponent,
    LoginComponent,
    CustomerComponent,
    CustomerhomeComponent,
    LoanofficerhomeComponent,
    LoanapplicationComponent,
    LoandetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
