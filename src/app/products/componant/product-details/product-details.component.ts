import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  id!:any
  data:any={}
  loading:boolean=false
   constructor(private _route:ActivatedRoute,private _service:ProductServiceService){
           this.id = _route.snapshot.paramMap.get("id")
   }
   ngOnInit(): void {
     this.getProductById()
   }
   getProductById(){
    this.loading=true
this._service.getProductbyId(this.id).subscribe({
  next:(res:any)=>{
    this.loading=false
    this.data=res;},
  error:(error:any)=>{
    this.loading=false
    alert(error.message)}
})
   }
}
