import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";

import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductItemComponent } from "./product-item/product-item.component";


const routes:Routes=[
    
    {path:'', component:ProductItemComponent},
    {path:'', redirectTo:'home' , pathMatch :'full'},
    {path:'product/add', component:AddProductComponent},
    {path:'product/details', component:ProductDetailsComponent},
    {path:'cart', component:CartComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class CustomAppRoutingModule{

}