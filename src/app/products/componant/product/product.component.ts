import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../../shared/models/product';
import { ProductServiceService } from '../../service/product-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private _service:ProductServiceService,private _build:FormBuilder){


  }
  base64:any='';
  ngOnInit(): void {
   
      this.form1=this._build.group(
        {
          title:[''],
          price:[''],
          category:[''],
          description:[''],
          image:[''],
        })
        this.getAllCategory()
  }
  update(item:any){
    
    
    this.form1.patchValue({
      title:item.title,
      price:item.price,
      category:item.category,
      description:item.description,
      image:item.image,
    })
    this.base64=item.image
  }
  updateproduct(){
    const model = this.form1.value;
    this._service.AddProduct(model).subscribe({
      next:()=>{alert("Addedd Product successfully")}
    })
      }
 
  AllCategory:string[]=[]
  form1!:FormGroup
  loading:boolean=false;
  @Input() title:string=""
  @Input() data!:Iproduct
  @Output() item =new EventEmitter()
  amount:number=0
  Isadded:boolean=false
 
  selectedcat(event:any){
    this.form1.get('category')?.setValue(event.target.value)
      }
add(){
 this.item.emit({item:this.data,quantity:this.amount})
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
}
