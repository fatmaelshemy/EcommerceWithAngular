import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartServiceService } from '../../service/cart-service.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit,OnChanges {
  cartProduct:any[]=[]
  total:number=0
  success:boolean=false
  constructor(private _service:CartServiceService){

  }
  
ngOnInit(): void {
  this.getCartProducts();
}
ngOnChanges(): void {
  this.getTotal();
}

  getCartProducts(){
    if("cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!);
      console.log(this.cartProduct)
     this.getTotal();
    }
  }
  getTotal(){
    this.total=0;
    for(let i in this.cartProduct){
      this.total+=this.cartProduct[i].item.price *this.cartProduct[i].quantity 
    }
  }
  detectChange(){
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    this.getTotal();
  }
  decrese(index:number){
  
     this.cartProduct[index].quantity--;
     this.getTotal();
     localStorage.setItem("cart",JSON.stringify(this.cartProduct))
}
increse(index:number){
  
  this.cartProduct[index].quantity ++;
  this.getTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
}
Remove(index:number){
 console.log(index);
 this.cartProduct.splice(index,1)
 localStorage.setItem("cart",JSON.stringify(this.cartProduct))
 console.log(this.cartProduct)
 this.getCartProducts()
}
clear(){
  this.cartProduct=[]
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
  console.log(this.cartProduct)
  this.getCartProducts()
}
addCartToDB(){
  let products = this.cartProduct.map(item=>{return item.item.id,item.quantity})
  let model={
    userId:5,
    date:new Date(),
    products:products
  }
  this._service.AddCart(model).subscribe({
    next:()=>{this.success=true}
  }
   
  )
}
close(){
  this.success=false;
}


}
