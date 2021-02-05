import { Component } from '@angular/core';
import {ProductService} from 'src/app/_services/product.service';     
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private productService:ProductService) { 
    
  }

  
  ngOnInit(): void {
    
    
  }
}
