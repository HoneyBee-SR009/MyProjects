import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MessengerService } from '../messenger.service';
import { faMinusSquare,faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorywiseproduct',
  templateUrl: './categorywiseproduct.component.html',
  styleUrls: ['./categorywiseproduct.component.css']
})
export class CategorywiseproductComponent implements OnInit {

  //@Input() use to access data from parent to child component
  faMinus = faMinusSquare;
  faPlus = faPlusSquare;
  products: Product[] = [];
  cartItems = [];
  cartTotal = 0;
  hidesec: any = 2;
  hidecart: any = 1;
  constructor( private productservice: ProductService, private msg: MessengerService) { }

  ngOnInit() {
    localStorage.setItem('hidecart', JSON.stringify(this.hidecart));
    localStorage.setItem('hidesec', JSON.stringify(this.hidesec));
    this.products = this.productservice.getProducts();
  }

  handleAddToCart(data:Product){
    this.msg.sendMsg(data);
    let quantity = true;
    if(!JSON.parse(localStorage.getItem('quantity'))){
      Swal.fire({
        imageUrl: data.imageUrl,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        title: 'Sorry! You Cannot Add More Than Quantity 5',
        showConfirmButton: false,
        timer: 1000
      });
      localStorage.setItem('quantity', JSON.stringify(quantity));

    }
    else{
      Swal.fire({
        imageUrl: data.imageUrl,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        title: data.name +' Is Added To Your Bag',
        showConfirmButton: false,
        timer: 1000
      });
    }
    
    
  }



  
  
  


}
