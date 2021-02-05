import { Component, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from '../_services/payment-type.service';
import { ProductCategoryService } from '../_services/product-category.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product:Product={data:[{}] , paymentTypes:[], category:{} };
  paymentTypes:PaymentType[]=[];
  productCategory:ProductCategory[]=[];
  radiobutton:number;

  constructor(
    private paymentTypeService : PaymentTypeService,
     private productCategoryService : ProductCategoryService) { }

  ngOnInit(): void {
    this.paymentTypes = this.paymentTypeService.getAllPayments();
    this.productCategory= this.productCategoryService.getAllProductCategory();
  }
 onSubmit(form){
   
   for(let index=0; index< this.paymentTypes.length; index++){
    if(form.value['check_' + index]){
      this.product.paymentTypes.push(this.paymentTypes[index]);

    }
  }
  console.log(this.product);
  //console.log(form.value);

 }
 

}
