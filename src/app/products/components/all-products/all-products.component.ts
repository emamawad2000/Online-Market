import { Component, OnInit } from '@angular/core';
import { ProductSerService } from '../../services/product-ser.service';
import {product} from '../../interfaces/product'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: product[] = [];
  categories: string[] = [];
  cartproducts:any[]=[]
  loading:boolean=true

  constructor(private service: ProductSerService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getcateg();
  }
  getProducts() {
    this.loading=true
    this.service.getAllproducts().subscribe((res: any) => {
      this.products = res;
    this.loading=false

    });
  }
  getcateg() {
    this.loading=true
    this.service.getCategories().subscribe(
      (res: any) => {
        this.categories = res;
    this.loading=false
      },
      (error) => {
        alert(error);
      }
    );
  }


  // filter(event:any){
  //   let value=event.target.value
  //   if(value=='all'){
  //     this.getProducts()
  //   }
  //   else{
  //     this.getProBycat(value)
  //   }
  // }
  // getProBycat(option:any){
  //   this.service.getProductsbycategories(option).subscribe((res:any)=>{
  //     this.products=res
  //   })
  // }


  filter(event:any){
    this.loading=true
    let value=event.target.value
    if(value==='all'){
      this.getProducts()
    }
    else{
      this.service.getProductsbycategories(value).subscribe((res:any)=>{
        this.products = res;
    this.loading=false
      })
    }
  }


addtocart(event:any){
if("cart" in localStorage){
  this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
  let exist = this.cartproducts.find(item=>item.item.id==event.item.id)
  if(exist)
  {
    alert("this product is aready in your cart")
  }
  else{
    this.cartproducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }

}
else{
  this.cartproducts.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartproducts))
}
}



}
