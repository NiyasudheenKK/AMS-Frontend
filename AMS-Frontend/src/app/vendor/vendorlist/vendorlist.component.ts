import { Component, OnInit } from '@angular/core';
import {VendorsService} from '../shared/vendors.service'
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  constructor(public vendorsService:VendorsService) { }

  ngOnInit(): void {
    console.log("welcome");

    //get all vendors
    this.vendorsService.bindGetAllVendorsList();
    console.log(this.vendorsService.vendors);
  }
 
   //subscribe
   getAllVendorsList(){

    //call service method
    console.log(this.vendorsService.getAllVendors().subscribe(
      response => {
        console.log("retrieving from list");
        console.log(response);        
      },
      (error) =>{
        console.log(error);
        
      }
    )
    );
  }


}
