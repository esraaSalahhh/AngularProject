import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from './_services/product.service';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category.service';
import { FormsModule } from '@angular/forms';
import { CustomAppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    FooterComponent,
    ProductDetailsComponent,
    AddProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomAppRoutingModule
  ],
  providers: [ProductService,PaymentTypeService,ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
