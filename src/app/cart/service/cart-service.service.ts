import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor(private _http:HttpClient){

  }
  getCarts(param?:any){
    let params=new HttpParams();
    params.append("startdate",param?.start).append("enddate",param?.end)

return this._http.get(environment.baseUrl +"carts",{params})
  }
  deleteCart(id:number){
    return this._http.delete(environment.baseUrl +"carts/"+id)
  }
}
