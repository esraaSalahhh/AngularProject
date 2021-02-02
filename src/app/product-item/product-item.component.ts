import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product :Product;
  constructor() {
    this.product={id:1 ,name:'Tecno Mobili REVERSIBLE OFFICE DESK-OAKSHARE THIS PRODUCT',price:300,discount:10,imagesUrls:['assets/img/product.jpg']};
   }

  ngOnInit(): void {
  }

}
