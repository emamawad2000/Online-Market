import { FormsModule } from '@angular/forms';
import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';




@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    FormsModule


  ],
  exports:[
    CartComponent
  ]
})
export class CartsModule { }
