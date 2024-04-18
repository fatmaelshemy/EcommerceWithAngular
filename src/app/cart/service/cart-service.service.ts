import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor(private _http:HttpClient){

  }
  AddCart(model:any){
return this._http.post(environment.baseUrl +"carts",model)
  }
}
