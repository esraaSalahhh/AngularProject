import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../_model/product';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product :Product;
  
  constructor(private productService:ProductService) {
    this.product={
      id:1 ,
      data:[{name:'Tecno Mobili REVERSIBLE OFFICE DESK-OAKSHARE THIS PRODUCT'}],
      price:300,
      discount:10,
      imagesUrls:'../../../../assets/img/product.jpg'};
   
   }

  ngOnInit(): void {
    this.product=this.productService.getProductById(this.product.id);
  }


  addedToCart(){
    this.productService.productAdded.emit(this.product);
    console.log(this.product)
  }

}
