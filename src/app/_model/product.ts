
import { ProductLang } from "./product-lang";
import { PaymentType } from "./payment-type";
import { ProductCategory } from "./product-category";
export interface Product{

    id?:number;
    data?:ProductLang[];
    price?: number;
    discount?: number;
    imagesUrls?: string;
    paymentTypes?:PaymentType[];
    category?:ProductCategory;

}