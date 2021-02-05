import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/_services/product.service';      
import { Product } from '../_model/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:string='Supermarket';
  products:Product[];
  title = 'Project';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getAllProducts();
    
    
  }

}


