import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorentryComponent } from './vendorentry/vendorentry.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [VendorlistComponent, VendorComponent, VendorentryComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[VendorentryComponent]
})
export class VendorModule { }
