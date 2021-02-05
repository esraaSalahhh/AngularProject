import { EventEmitter } from "@angular/core";
import { Product } from "../_model/product";

export class ProductService {
 
     private products: Product[] = [
      {
        id: 1,
        name: 'photo camera',
        price: 300,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/1 (2).jpg',
      },
      {
        id: 2,
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        id: 2,
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        name: 'camera',
        price: 6000,
        discount: 30,
        category:'supermarket',
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      
     
    ];
      productAdded=new EventEmitter<Product>();
    getAllProducts(): Product[] {
        return this.products.slice();      ///act as a clone 
      }

      getCategoris(name:string):Product[]{
      let x=this.products.filter((ob)=>{
        return ob.category===name;
      })
      return  x;
      }

      getProductById(id: number): Product {
        return this.products.find(p => p.id === id);
      }
     

      addProduct(name:string ,price:number,discount:number,imagesUrls:string) {
        const id = this.products.length;
        const product:Product={id ,name,price,discount,imagesUrls};
        this.products.push(product);
      }
}