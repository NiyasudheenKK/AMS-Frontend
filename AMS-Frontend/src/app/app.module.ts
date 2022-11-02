import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginUserregistrationModule } from './login-userregistration/login-userregistration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetCreationModule } from './asset-creation/asset-creation.module';
import { AssetDefinitionModule } from './asset-definition/asset-definition.module';
import { PurchaseModule } from './purchase/purchase.module';
import { VendorModule } from './vendor/vendor.module';
import { PurchaseListComponent } from './purchase/purchase-list/purchase-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginUserregistrationModule,
    AssetCreationModule,
    AssetDefinitionModule,
    PurchaseModule,
    VendorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
