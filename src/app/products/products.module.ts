import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './componant/allproducts/allproducts.component';
import { ProductDetailsComponent } from './componant/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './componant/product/product.component';




@NgModule({
  declarations: [
    AllproductsComponent,
    ProductDetailsComponent,
    ProductComponent,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
    
  ]
})
export class ProductsModule { }
