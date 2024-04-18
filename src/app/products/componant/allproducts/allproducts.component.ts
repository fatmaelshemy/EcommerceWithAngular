import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../shared/Componant/spinner/spinner.component';
import { Iproduct } from '../../../shared/models/product';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css',
  providers:[CommonModule]
})
export class AllproductsComponent implements OnInit {
  products:Iproduct[]=[]
  
  AllCategory:string[]=[]
  title:string="Categories:"
  loading:boolean=false;
  cartProduct:any[]=[]
  constructor(private _service:ProductServiceService){

  }
 

  addToCart(event:any){
if("cart" in localStorage){
  this.cartProduct=JSON.parse(localStorage.getItem("cart")!);
  let exists = this.cartProduct.find(item=>item.item.id == event.item.id)
  if(exists){
    alert("This product already exists in your cart")
  }else{
  this.cartProduct.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
  }
}
else{
  this.cartProduct.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
}
  }
  ngOnInit() {
    this.getAllProduct()
    this.getAllCategory()
  }
 
  getAllProduct(){
    this.loading=true
    return this._service.getAllProducts().subscribe({

      next:(res:any)=>{
        this.loading=false
        this.products = res
      },
    error:(error: any)=>{
      this.loading=false
      alert(error.message)
    }
    }
    )
    
    
  }
  getAllCategory(){
    this.loading=true
    return this._service.getAllCategory().subscribe({
      next:(res:any)=>{
        this.loading=false
        this.AllCategory = res},
      error:(error: any)=>{
        this.loading=false
        alert(error.message)
      }
    })

  }
  filterProduct(event:any){
    this.loading=true
    let catName = event.target.value;
    console.log(catName)
    this.getProductByCatName(catName)
  }
  getProductByCatName(catName:string){
    this.loading=true
     return this._service.getProductbyCat(catName).subscribe({
      next:(res:any)=>{
        this.loading=false
        if (catName=="All")
{
 this.getAllProduct();
}     else{   this.products=res ; console.log(res)}},
      error:(error: any)=>{
        this.loading=false
        alert(error.message)
      }
     })
  }

}

