import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginUserregistrationModule } from './login-userregistration/login-userregistration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetCreationModule } from './asset-creation/asset-creation.module';
import { AssetDefinitionModule } from './asset-definition/asset-definition.module';
import { PurchaseModule } from './purchase/purchase.module';
import { VendorModule } from './vendor/vendor.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VendorsService } from './vendor/shared/vendors.service';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule,
  ],
  providers: [VendorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
