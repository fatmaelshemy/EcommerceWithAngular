import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this._http.get( environment.baseUrl +"products");
  }
  getAllCategory(){
    return this._http.get(environment.baseUrl +'products/categories')
   }
 
  getProductbyCat(cat: string) {
    return this._http.get(environment.baseUrl + `products/category/${cat}`);
  }
  getProductbyId(id:number){
    return this._http.get(environment.baseUrl + `products/${id}`);
  }
  
}
