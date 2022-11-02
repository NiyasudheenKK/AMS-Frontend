import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetDefintitonEntryComponent } from './asset-definition/asset-defintiton-entry/asset-defintiton-entry.component';
import { AssetDefintitonListComponent } from './asset-definition/asset-defintiton-list/asset-defintiton-list.component';

const routes: Routes = [
  {path: '', redirectTo:'assetDefinition',pathMatch:'full'},
  {path:'assetDefinition',component:AssetDefintitonListComponent},
  {path:'assetType',component:AssetDefintitonEntryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
