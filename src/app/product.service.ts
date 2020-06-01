import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1,'Cauliflower','this is demo prod',45,'/assets/images/fresho-cauliflower.jpg'),
    new Product(2,'Lemon','this is demo prod',25,'/assets/images/fresho-lemon-kagji.jpg'),
    new Product(3,'Coriender','this is demo prod',65,'/assets/images/fresho-papaya-small.jpg'),
    new Product(4,'Brinjal','this is demo prod',55,'/assets/images/fresho-lemon-gandharaj.jpg'),
    new Product(5,'Tomato','this is demo prod',35,'/assets/images/fresho-brinjal.jpg'),
    new Product(6,'Potato','this is demo prod',15,'/assets/images/p4.jpg'),
    new Product(7,'Coriender','this is demo prod',65,'/assets/images/p6.jpg'),
    new Product(8,'Brinjal','this is demo prod',55,'/assets/images/watermelon.jpg'),
    new Product(9,'Tomato','this is demo prod',35,'/assets/images/fresho-parwal.jpg'),
    new Product(10,'Potato','this is demo prod',15,'/assets/images/fresho-parsley.jpg'),
    new Product(11,'Coriender','this is demo prod',65,'/assets/images/fresho-apple-washington.jpg'),
    new Product(12,'Brinjal','this is demo prod',55,'/assets/images/fresho-alphonso-mango-premium.jpg'),
    new Product(13,'Tomato','this is demo prod',35,'/assets/images/fresho-neem.jpg'),
    new Product(14,'Potato','this is demo prod',15,'/assets/images/fresho-cauliflower.jpg'),

  ]
  constructor(private http: HttpClient) { 
    
  }

  getProducts(): Product[] {
    return this.products;
  }



}