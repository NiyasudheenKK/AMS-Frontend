import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetDefinitionComponent } from './asset-definition/asset-definition.component';
import { AssetDefinitionEntryComponent } from './asset-definition-entry/asset-definition-entry.component';
import { AssetDefinitionListComponent } from './asset-definition-list/asset-definition-list.component';



@NgModule({
  declarations: [AssetDefinitionComponent, AssetDefinitionEntryComponent, AssetDefinitionListComponent],
  imports: [
    CommonModule
  ]
})
export class AssetDefinitionModule { }
