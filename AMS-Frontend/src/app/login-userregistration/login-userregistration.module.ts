import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';



@NgModule({
  declarations: [LoginComponent, UserRegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class LoginUserregistrationModule { }
