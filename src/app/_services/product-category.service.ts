import { Injectable } from '@angular/core';
import { ProductCategory } from '../_model/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  productCategory:ProductCategory[]=[
    {id:'1' , name:"Supermarket"},
    {id:'2' , name:"Fashion"},
    {id:'3' , name:"Health $ Beauty"},
    {id:'4' , name:"Baby Products"},
    {id:'5' , name:"Phones $ Tablets"},
    {id:'6' , name:"Home $ Office"},
    {id:'7' , name:"Electronics"},
    {id:'8' , name:"Computing"},
    {id:'9' , name:"Sporting Goods"},
    {id:'10' , name:"Gaming"},
    {id:'11' , name:"Automobile"}
    
  ];
  getAllProductCategory():ProductCategory[]{
   return this.productCategory.slice();
  }

  constructor() { }
}
