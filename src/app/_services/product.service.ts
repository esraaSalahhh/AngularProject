import { EventEmitter } from "@angular/core";
import { Product } from "../_model/product";

export class ProductService {
 
     private products: Product[] = [
      {
        id: 1,
        data:[{name:'photo camera'}] ,
        price: 300,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/1 (2).jpg',
      },
      {
        id: 2,
        data:[{name:'camera'}] ,
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        id: 2,
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
        imagesUrls: '../../../../assets/img/product.jpg',
      },
      {
        data:[{name:'camera'}],
        price: 6000,
        discount: 30,
        category:{name:'supermarket'},
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
     

      addProduct(product: Product) {
        const id =this.products.length;
        const newProduct:Product={
          id ,
          data:product.data ,
          price:product.price,
          discount:product.discount, 
          imagesUrls:product.imagesUrls, 
          category:product.category, 
          paymentTypes:product.paymentTypes,
           }
        this.products.push(newProduct);
      }
}