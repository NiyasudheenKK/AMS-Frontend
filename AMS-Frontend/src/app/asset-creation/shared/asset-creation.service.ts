
import { Injectable } from '@angular/core';
import { AssetCreation } from './asset-creation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetCreationService
{
  
  filter(arg0: any) {
    throw new Error('Method not implemented.');
  }
  map(arg0: any) {
    throw new Error('Method not implemented.');
  }
  //Global Variable
  formUserData : AssetCreation= new AssetCreation();
 

  //List of Users -- Retrieve all Records
  assetCreations : AssetCreation[]; //All Users
 

  constructor(private httpClient : HttpClient)
  {

  }

  //Call REST API
  //  1 Get all Users
  getAllAssets() : Observable<any>
  {
    //  http://localhost:9095/api/users
    return this.httpClient.get(environment.apiUrl + "/api/assetCreations");
  }

  //  2 Retrieve all Users for Listing
  bindGetAllAssetsList()
  {
    this.httpClient.get(environment.apiUrl + '/api/assetCreations')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.assetCreations = response as AssetCreation[];
      }
    );
  }

 

  // insert

  insertAsset(assetCreations: AssetCreation): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/assetCreations',assetCreations);
  }


  //update
  updateAsset(assetCreations: AssetCreation): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/assetCreations',assetCreations);
  }

  //delete
  deleteAsset(userId:number): Observable<any>{
    return this.httpClient.delete(environment.apiUrl+'/api/assetCreations/'+userId)
  }
}
