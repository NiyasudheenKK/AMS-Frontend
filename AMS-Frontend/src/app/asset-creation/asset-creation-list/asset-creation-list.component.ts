import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AssetCreationService } from '../shared/asset-creation.service';
import { AssetCreation } from '../shared/asset-creation';

@Component({
  selector: 'app-asset-creation-list',
  templateUrl: './asset-creation-list.component.html',
  styleUrls: ['./asset-creation-list.component.scss']
})
export class AssetCreationListComponent implements OnInit {

  page:  number=0;
  filter: string='';

  constructor(public assetCreationServices:AssetCreationService ,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  

  console.log("Welcome Life Cycle Hook");
    // Testing

  this.assetCreationServices.bindGetAllAssetsList();

}





  //Subscribe getAllUsers
  getAllAssetsList() {
    //Call Service
    this.assetCreationServices.getAllAssets().subscribe(
      response => {
        console.log("Retrieving from list");
        console.log(response);
      },
      (error) => {
        console.log("Something Wrong");
        console.log(error);
      }
    )
  }

  //update a user
  updateAsset(userId: number) {
    console.log(userId);
    // this.usersService.formUserData=
    // this.router.navigate(['userentry',userId])
  }

  //user form to edit
  populateForm(assetCreation: AssetCreation) {
    console.log(assetCreation);
    this.assetCreationServices.formUserData = Object.assign({}, assetCreation)
  }


  //delete user
  deleteAsset(userId: number) {
    console.log("deleting a record")
    if (confirm('Are you sure you want to delete this record ?')) {
      this.assetCreationServices.deleteAsset(userId).subscribe(
        (result) => {
          console.log(result);
          this.assetCreationServices.bindGetAllAssetsList();
          this.toastr.error("user record has been delete",'UserApp v2022');
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
   
  }

}

