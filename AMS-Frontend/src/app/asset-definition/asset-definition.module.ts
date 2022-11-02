import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetDefintitonListComponent } from './asset-defintiton-list/asset-defintiton-list.component';
import { AssetDefintitonEntryComponent } from './asset-defintiton-entry/asset-defintiton-entry.component';
import { AssetTypeEntryComponent } from './asset-type-entry/asset-type-entry.component';
import { AssetTypeListComponent } from './asset-type-list/asset-type-list.component';



@NgModule({
  declarations: [AssetDefintitonListComponent, AssetDefintitonEntryComponent, AssetTypeEntryComponent, AssetTypeListComponent],
  imports: [
    CommonModule
  ]
})
export class AssetDefinitionModule { }
