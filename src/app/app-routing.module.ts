import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './products/componant/allproducts/allproducts.component';
import { ProductDetailsComponent } from './products/componant/product-details/product-details.component';
import { CartsComponent } from './cart/componant/carts/carts.component';

const routes: Routes = [
  {path:"products",component:AllproductsComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartsComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
