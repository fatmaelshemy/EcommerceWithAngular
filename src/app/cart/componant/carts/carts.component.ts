import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartServiceService } from '../../service/cart-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductServiceService } from '../../../products/service/product-service.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit{

  carts:any[]=[]
  total:number=0
  success:boolean=false
  form!:FormGroup
  details:any
  products:any[]=[]
  
  constructor(private _service:CartServiceService,private _build:FormBuilder,private _productser:ProductServiceService){

  }
  
ngOnInit(): void {
  this.getCarts();
  this.form=this._build.group({
    start:[""],
    end:[""],

  })
}
applyFilter(){
  
  this._service.getCarts(this.form.value).subscribe({
    next:(res:any)=>{
      this.carts=res
      console.log(this.carts);
      
      this.getCarts()
    }
  })
}
getCarts(){
  this._service.getCarts().subscribe({
    next:(res:any)=>{
      this.carts=res
      
    }
  })
}
delete(id:number){
this._service.deleteCart(id).subscribe({
  next:(res:any)=>{alert("Cart Deleted Success");
    this.getCarts()
  }
})
}
view(index:number){
  this.products=[]
this.details=this.carts[index]
for(let i in this.details.products){
  this._productser.getProductbyId(this.details.products[i].productId).subscribe({
    next:(res:any)=>{this.products.push({item:res,quantity:this.details.products[i].quantity})}
  })
}
}

}
