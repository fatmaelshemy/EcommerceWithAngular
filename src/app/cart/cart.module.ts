import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './componant/carts/carts.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CartModule { 

}
