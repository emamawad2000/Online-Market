import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductSerService {

  constructor(private http: HttpClient) { }
  getAllproducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
getProductsbycategories(option:any){
  return this.http.get('https://fakestoreapi.com/products/category/'+option)
}
getproductbyid(id:any){
  return this.http.get('https://fakestoreapi.com/products/'+id)
}
}
