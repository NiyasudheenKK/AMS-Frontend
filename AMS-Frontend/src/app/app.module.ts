import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginUserregistrationModule } from './login-userregistration/login-userregistration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetCreationModule } from './asset-creation/asset-creation.module';
import { AssetDefinitionModule } from './asset-definition/asset-definition.module';
import { PurchaseModule } from './purchase/purchase.module';
import { VendorModule } from './vendor/vendor.module';
import { AssetTypeListComponent } from './asset-type/asset-type-list/asset-type-list.component';
import { AssetTypeEntryComponent } from './asset-type/asset-type-entry/asset-type-entry.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AssetTypeListComponent,
    AssetTypeEntryComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginUserregistrationModule,
    AssetCreationModule,
    AssetDefinitionModule,
    PurchaseModule,
    VendorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
