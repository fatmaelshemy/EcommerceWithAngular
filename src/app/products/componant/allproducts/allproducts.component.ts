import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../shared/Componant/spinner/spinner.component';
import { Iproduct } from '../../../shared/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  base64:any='';
  form!:FormGroup
  constructor(private _service:ProductServiceService,private _build:FormBuilder){

  }
  ngOnInit() {
    this.form=this._build.group(
      {
        title:['',[Validators.required]],
        price:['',[Validators.required]],
        category:['',[Validators.required]],
        description:['',[Validators.required]],
        image:['',[Validators.required]],
      }
    )
    this.getAllProduct()
    this.getAllCategory()
  }
  selectedcat(event:any){
this.form.get('category')?.setValue(event.target.value)
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

  getImagePath(event:any){
    const file =event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
this.base64=reader.result;
this.form.get('image')?.setValue(this.base64)
    }
    
  }
  
  addproduct(){
const model = this.form.value;
this._service.AddProduct(model).subscribe({
  next:()=>{alert("Addedd Product successfully")}
})
  }

}

