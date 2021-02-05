import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../_services/product.services';
import {Product}  from '../_model/product'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {


sizePage:number=10;

  constructor(
    private Service :ProductService ,
    private activerout:ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }

itemCategories():Product[]{
let NameOfCategory=this.activerout.snapshot.params.id;
console.log(NameOfCategory);
return this.Service.getCategoris(NameOfCategory)
}  

 NumberOfPages():number[]{

let numberofPages:number[]=[];
for (let y =0 ; y <this.itemCategories().length/6 ; y++){
numberofPages.push(y+1);
}  
return numberofPages;
}



}