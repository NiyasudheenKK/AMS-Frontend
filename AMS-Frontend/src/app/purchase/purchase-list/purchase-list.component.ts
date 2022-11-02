import { Component, OnInit } from '@angular/core';
import { PurchaceOrderService } from '../shared/purchace-order.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

  constructor(public purchaseOrderService: PurchaceOrderService) { }

  ngOnInit(): void {

    this.purchaseOrderService.bindGetAllPurchaseOrders();
    console.log(this.purchaseOrderService.purchaseOrders)
  }

  getAllPurchases(){
    this.purchaseOrderService.getAllPurchaseOrders().subscribe(
      response => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
