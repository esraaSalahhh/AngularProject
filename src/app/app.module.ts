import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from './_services/product.services';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import { ItemSideBarComponent } from './item-side-bar/item-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    CategoriesComponent,
    ItemSideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'categories/:id', component:CategoriesComponent},
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
