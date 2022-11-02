import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetDefintitonListComponent } from './asset-defintiton-list/asset-defintiton-list.component';
import { AssetDefintitonEntryComponent } from './asset-defintiton-entry/asset-defintiton-entry.component';
import { AssetTypeEntryComponent } from './asset-type-entry/asset-type-entry.component';
import { AssetTypeListComponent } from './asset-type-list/asset-type-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AssetDefintitonListComponent, AssetDefintitonEntryComponent, AssetTypeEntryComponent, AssetTypeListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class AssetDefinitionModule { }
