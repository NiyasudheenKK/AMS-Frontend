import { Component, OnInit } from '@angular/core';
import { AssetDefinitionService } from '../shared/asset-definition.service';
import { ToastrModule } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asset-defintiton-entry',
  templateUrl: './asset-defintiton-entry.component.html',
  styleUrls: ['./asset-defintiton-entry.component.scss']
})
export class AssetDefintitonEntryComponent implements OnInit {

  constructor(public assetsDefinitionService:AssetDefinitionService,
  ) { }

ngOnInit(): void {
//get all roles for drop-down list
this.assetsDefinitionService.bindGetAllAssetTypes()
}

onSubmit(form:NgForm){
console.log(form.value);
let insertId=this.assetsDefinitionService.formAssetDefinitionData.adId;

//checking for insert or update
if(insertId==0 || insertId==null){
  //Insert
  this.insertAssetRecord(form)
}
else
{
  //update
  this.updateAssetRecord(form)
}
}

//Insert method
insertAssetRecord(form?:NgForm){
console.log("Inserting a record");
console.log(form.value)
this.assetsDefinitionService.insertAssetDefinition(form.value).subscribe(
  (result)=>{
    console.log(result);
    //this.toastrService.success
    console.log("Asset record has been inserted");
    window.location.reload();
  }
)

}

//Update method
updateAssetRecord(form?:NgForm){
console.log("Updating a record");
console.log(form.value)
this.assetsDefinitionService.updateAssetDefinition(form.value).subscribe(
  (result)=>{
    console.log(result);
    //this.toastrService.success
    console.log("Asset record has been updated");
    window.location.reload();
  }
)

}



}
