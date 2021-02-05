import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from './_services/product.service';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import { ItemSideBarComponent } from './item-side-bar/item-side-bar.component';
import { ItemBarComponent } from './item-bar/item-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    CategoriesComponent,
    ItemSideBarComponent,
    ItemBarComponent,
    HomeComponent,
    FooterComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'', redirectTo:'home' , pathMatch :'full'},
      {path:'categories/:id', component:CategoriesComponent},
      {path:'product/add', component:AddProductComponent},
    ])
  ],
  providers: [ProductService,PaymentTypeService, ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
