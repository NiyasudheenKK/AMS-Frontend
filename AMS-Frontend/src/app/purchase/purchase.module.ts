import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEntryComponent } from './purchase-entry/purchase-entry.component';



@NgModule({
  declarations: [PurchaseListComponent, PurchaseEntryComponent],
  imports: [
    CommonModule
  ],
  exports: [PurchaseListComponent]
})
export class PurchaseModule { }
