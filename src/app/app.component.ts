import { Component } from '@angular/core';
import {ProductService} from 'src/app/_services/product.services';      
import { Product } from './_model/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products:Product[];
  title = 'Project';
  constructor(private productService:ProductService) { 
    
  }

  ngOnInit(): void {
    this.products=this.productService.getAllProducts();
    
    
  }
}
