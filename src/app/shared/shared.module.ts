import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Componant/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './Componant/spinner/spinner.component';
import { SelectComponent } from './Componant/select/select.component';
import { CartModule } from '../cart/cart.module';




@NgModule({
  declarations:[
     HeaderComponent,
     SpinnerComponent,
     SelectComponent,
     
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule
   
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    CartModule,
    FormsModule,
    RouterModule
    
 ],
})
export class SharedModule { }
