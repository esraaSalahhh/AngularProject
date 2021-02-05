import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

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
