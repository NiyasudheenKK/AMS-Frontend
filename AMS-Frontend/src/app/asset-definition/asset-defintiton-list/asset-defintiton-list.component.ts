import { Component, OnInit } from '@angular/core';
import { AssetDefinitionService } from 'src/app/asset-definition/shared/asset-definition.service';
import { ToastrModule } from 'ngx-toastr';
import { AssetDefinition } from '../shared/asset-definition';

@Component({
  selector: 'app-asset-defintiton-list',
  templateUrl: './asset-defintiton-list.component.html',
  styleUrls: ['./asset-defintiton-list.component.scss']
})
export class AssetDefintitonListComponent implements OnInit {

   //assign default page
   page:number=1;
   filterString:string='';
  constructor(public assetsDefinitionService : AssetDefinitionService) { }

  ngOnInit(): void {
    // Life Cycle Hook - Initialize
    console.log("Welcome Life Cycle Hook");
    // Testing

    this.assetsDefinitionService.bindGetAllAssetDefinitionsList();
    
  }

  //Subscribe getAllUsers
  getAllAssetDefinitionsList()
  {
    //Call Service
    this.assetsDefinitionService.getAllAssetDefinitions().subscribe(
      response => {
        console.log("Retrieving from list");
        console.log(response);
      },
      (error) =>{
        console.log("Something Wrong");
        console.log(error);
      }
    )
  }
  updateAssetDefinition(adId:AssetDefinitionService){
    console.log(adId);
  }

  deleteAssetDefinition(adId: number) {
    console.log("asset"+adId)
    if(confirm("Are you sure to delete "+adId)) {
      this.assetsDefinitionService.deleteAssetDefinition(adId).subscribe(
        (result)=>{
          console.log(result);
          this.assetsDefinitionService.bindGetAllAssetDefinitionsList();
          console.log("Record has been deleted successfully");
        },
        (error)=>{
          console.log(error);
        });

    }
  }
  populateForm(asset:AssetDefinition){
    console.log(asset)
    this.assetsDefinitionService.formAssetDefinitionData=Object.assign({},asset)
  }
  
}
