import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_model/product';
import { ProductService } from '../_services/product.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
cartArray:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res)=>{
        this.cartArray.push(res);
        console.log(res);
        
      },
      (err)=>{console.error(err)},
      (completed)=>{alert('completed')}

    );
  }

}
