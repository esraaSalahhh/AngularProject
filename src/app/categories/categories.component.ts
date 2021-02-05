import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../_services/product.service';
import {Product}  from '../_model/product'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {


sizePage:number=6;
currentPage:number=0;

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
for (let y =0 ; y <this.itemCategories().length/this.sizePage ; y++){
numberofPages.push(y+1);
}  
return numberofPages;
}


itemPagination():Product[]{
let start=this.currentPage*this.sizePage;
let end=(this.sizePage*this.currentPage)+this.sizePage
  return this.itemCategories().slice(start, end)
}




}