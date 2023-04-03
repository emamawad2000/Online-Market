import { CartSerService } from './../../services/cart-ser.service';
import { Component, OnInit } from '@angular/core';
let btn=document.getElementById("orderbtn")
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  data:any={}
  cartproducts:any[]=[]
  total:any
  orderdone:boolean=false

constructor(private service:CartSerService){

}
  ngOnInit(): void {
    this.getcartproducts()
  }

getcartproducts(){
  if('cart' in localStorage){
    this.cartproducts=JSON.parse(localStorage.getItem('cart')!)
    console.log(this.cartproducts)
  }
  this.getcarttotal()
}

getcarttotal(){
this.total=0
for(let i in this.cartproducts){
  this.total+=(this.cartproducts[i].item.price*this.cartproducts[i].quantity)
}
}

minasAmount(index:any){
  if(this.cartproducts[index].quantity>1)
  {
    this.cartproducts[index].quantity-=1
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
    this.getcarttotal()
  }

}

plusAmount(index:any){
  this.cartproducts[index].quantity+=1
  localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  this.getcarttotal()
}

deleteItem(index:any){
  this.cartproducts.splice(index,1)
  localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  this.getcarttotal()

}
detectchange(){
  localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  this.getcarttotal()

}

deleteall(){
this.cartproducts=[]
localStorage.setItem("cart",JSON.stringify(this.cartproducts))
this.getcarttotal()
}

addcart(){
  let products = this.cartproducts.map(item=>{
    return{productid:item.item.id,quantity:item.quantity}
  })
  let model={
    userid:5,
    date:new Date(),
    products:products
  }
this.service.createnewcart(model).subscribe(res=>{
  this.orderdone=true
})
}




}
