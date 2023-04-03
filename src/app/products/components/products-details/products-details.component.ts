import { ProductSerService } from './../../services/product-ser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  proid:any
  data:any={}
  loading:boolean=false
constructor(private route:ActivatedRoute , private ser:ProductSerService){
  this.proid=this.route.snapshot.paramMap.get('id')

}
ngOnInit(): void {
  this.getproductbyid()
  }

getproductbyid(){
  this.loading=true
  this.ser.getproductbyid(this.proid).subscribe((res=>{
    this.data=res
    this.loading=false

  }))
}



}
