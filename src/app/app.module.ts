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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    CategoriesComponent,
    ItemSideBarComponent,
    ItemBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'categories/:id', component:CategoriesComponent},
      {path:'', component:HomeComponent},
      {path:'', redirectTo:'home' , pathMatch :'full'},
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
