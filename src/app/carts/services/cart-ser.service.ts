import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartSerService {


  constructor(private http:HttpClient) { }
  createnewcart(model:any){
   return this.http.post('https://fakestoreapi.com/carts',model)
  }

}
