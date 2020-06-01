import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MessengerService } from '../messenger.service';
import { Product } from '../product';
import { faMinusSquare, faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  cartItems = [];
  cartTotal = 0;
  hidesec: any = 2;
  hidecart: any = 3;
  faMinus = faMinusSquare;
  faPlus = faPlusSquare;
  faTimes = faTimes;
  price: any;
  qty: any;
  message: any;
  closeResult: string;
  
  constructor(private msg: MessengerService) { }

  ngOnInit(){

    localStorage.setItem('hidesec', JSON.stringify(this.hidesec));
    localStorage.setItem('hidecart', JSON.stringify(this.hidecart));
    this.cartItems= JSON.parse(localStorage.getItem('cartdata'));
    this.cartTotal= JSON.parse(localStorage.getItem('carttotal'));
    if(this.cartItems === null){
      this.cartItems = [];
      this.cartTotal = 0;
      
    }
  }

  qtydecrement(product){
    if(product.qty === 1){
      var newData = this.cartItems.filter(function(item) { 
        return item.productId !== product.productId;  
      });
      this.cartItems = newData;
      this.cartTotal = (this.cartTotal-product.price);
      localStorage.setItem('cartdata', JSON.stringify(this.cartItems));
      localStorage.setItem('carttotal', JSON.stringify(this.cartTotal));
    }
    else{
      this.qty = --product.qty;
      this.price = (this.qty * product.price);
      this.cartTotal = JSON.parse(localStorage.getItem('carttotal'));
      this.cartTotal = (this.cartTotal-product.price);
      this.cartItems["qty"] = this.qty;
      this.cartItems["price"] = this.price;
      localStorage.setItem('cartdata', JSON.stringify(this.cartItems));
      localStorage.setItem('carttotal', JSON.stringify(this.cartTotal));
    } 
  }
  
  
  qtyincrement(product){
    if(product.qty === 5){
      this.message = "You Can Add Upto Quantity 5 Only";
      setTimeout (() => {
        this.message = false ;
     }, 2000);
    }
    else{
      this.qty = ++product.qty;
      this.price = (this.qty * product.price);
      this.cartTotal = JSON.parse(localStorage.getItem('carttotal'));
      this.cartTotal = (this.cartTotal+product.price);
      this.cartItems["qty"] = this.qty;
      this.cartItems["price"] = this.price;
      localStorage.setItem('cartdata', JSON.stringify(this.cartItems));
      localStorage.setItem('carttotal', JSON.stringify(this.cartTotal));
    }  
  }
  
  
  removefromcart(product){
    var newData = this.cartItems.filter(function(item) { 
      return item.productId !== product.productId;  
    });
    this.cartItems = newData;
    this.cartTotal = (this.cartTotal-(product.qty*product.price));
    localStorage.setItem('cartdata', JSON.stringify(this.cartItems));
    localStorage.setItem('carttotal', JSON.stringify(this.cartTotal));
  }


    
  }


