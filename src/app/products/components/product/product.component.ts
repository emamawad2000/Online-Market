import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data :any={}
  @Output() selecteditem = new EventEmitter()
  flag:boolean=false
  amount:number=0
  total:number=0

  constructor(){

  }
  gocart(){
     if (this.amount<=0)
     {
      alert("  the amount must be greater than zero")
     }
     else{
    this.selecteditem.emit({item:this.data,quantity:this.amount})
     }

  }




}
