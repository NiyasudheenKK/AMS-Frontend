import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorentryComponent } from './vendor/vendorentry/vendorentry.component';
import { VendorlistComponent } from './vendor/vendorlist/vendorlist.component';

const routes: Routes = [
  {path: '', redirectTo:'/vendorentry',pathMatch:'full'},
  // {path: '', redirectTo:'/login',pathMatch:'full'},
  // {path: 'vendorlist',component:VendorlistComponent},
  {path: 'vendorentry',component:VendorentryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
