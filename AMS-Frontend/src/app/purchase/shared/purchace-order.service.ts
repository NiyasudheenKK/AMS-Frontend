import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PurchaceOrderService {

  purchaseOrders: any[];

  constructor(private httpClient: HttpClient) { }

  getAllPurchaseOrders(): Observable<any>{
    return this.httpClient.get(environment.apiURL + "api/purchases/list");
  }

  bindGetAllPurchaseOrders(){
    this.httpClient.get(environment.apiURL + "api/purchases/list").toPromise().then(
      (response) => {
        console.log(response);
        this.purchaseOrders = response as any;
      }
    )
  }
}
