import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Iproduct } from '../../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title:string=""
  @Input() data!:any
  @Output() item =new EventEmitter()
  amount:number=0
  Isadded:boolean=false
add(){
 this.item.emit({item:this.data,quantity:this.amount})
}
}
