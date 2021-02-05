import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../_model/product';
import { ProductService } from 'src/app/_services/product.services';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product :Product;
  
  constructor(private productService:ProductService) {
   
   }

  ngOnInit(): void {
  }


  addedToCart(){
    this.productService.productAdded.emit(this.product);
    console.log(this.product)
  }

}
