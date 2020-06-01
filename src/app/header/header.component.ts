import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessengerService } from '../messenger.service';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'; 
import { Product, userSignup, userOtp } from '../product';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { Router } from '@angular/router';
import { faMinusSquare,faPlusSquare,faTimes,faUserPlus,faShoppingBasket,faChevronCircleDown,faSignOutAlt,faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  faMinus = faMinusSquare;
  faPlus = faPlusSquare;
  faTimes = faTimes;
  faUserPlus = faUserPlus;
  faShoppingBasket = faShoppingBasket;
  faChevronCircleDown = faChevronCircleDown;
  faSignOutAlt = faSignOutAlt;
  faSearch = faSearch;
  cartItems = [
    // {id:1,productId:1, productName:'Cauliflower', qty:1,price:45,imageUrl:'/assets/images/fresho-cauliflower.jpg'}
  ];

  cartTotal = 0;
  price: any;
  qty: any;
  message: any;
  closeResult: string;
  modalOptions:NgbModalOptions;
  hidesec: any = 1;
  hidecart: any = 1;
  user: any;



  constructor(private formbuilder: FormBuilder, private router: Router, private apiService: ApiService,
     private modalService: NgbModal, private _socioAuthServ: AuthService, private cartService: CartService, 
     private msg: MessengerService) {  
      this.modalOptions = {
        backdrop:'static',
        backdropClass:'customBackdrop'
      }
  }  

  signupForm : FormGroup;
  userSignup: userSignup[];
  sendOtpForm : FormGroup;
  userOtp: userOtp[];
  invalidSignup : boolean = false;
  success : boolean = false;
  error : boolean = false;
  sendOtp : boolean = false;


  ngOnInit() {
    localStorage.setItem('hidecart', JSON.stringify(this.hidecart));
    this.cartItems= JSON.parse(localStorage.getItem('cartdata'));
    this.cartTotal= JSON.parse(localStorage.getItem('carttotal'));
    if(this.cartItems === null){
      this.cartItems = [];
      this.cartTotal = 0;
    }
    this.msg.getMsg().subscribe((product:Product) =>{
        this.addProductToCart(product);
    });
    this.signupForm = this.formbuilder.group({
      email: ['', Validators.required]
    });

  }
    
  addProductToCart(product:Product){
  let productExist = false;
  let quantity = true;

  for(let i in this.cartItems){
    if(this.cartItems[i].productId === product.id){
      if(this.cartItems[i].qty < 5){
      this.cartItems[i].qty++;
      productExist = true;
      quantity = true;
      break;
      }
      else{
        quantity = false;
        localStorage.setItem('quantity', JSON.stringify(quantity));
      }

    }
  }
    if(!productExist && quantity){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
        imageUrl: product.imageUrl
      })
    }
    this.cartTotal = 0
    this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
  })
  localStorage.setItem('cartdata', JSON.stringify(this.cartItems));
  localStorage.setItem('carttotal', JSON.stringify(this.cartTotal));
  
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

hideCart(){
  if(JSON.parse(localStorage.getItem('hidecart'))>= 3){
    return true;
  }
  else{
    return false;
  }
}


  openSm(content) {
    this.modalService.open(content, { backdrop: 'static', keyboard: false, size: 'sm' });
  }
 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  signIn(platform: string): void {
    platform = FacebookLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= ", response);
        this.user = response;
      }
    );
  }

  signInWithGoogle(platform: string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then((response)=>{
      console.log(platform + " logged in user data is= ", response);
        this.user = response;
    });
  }
 
  // Method to log out.
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }


 
    onSubmit() {
      this.apiService.signupUser(this.signupForm.value)
        .subscribe( data => {
          if(data.status == 2){
            this.success = true;
            this.sendOtp = true;
            setTimeout (() => {
              this.success = false ;
           }, 6000);
          
          
          }else if(data.status == 1){
              this.invalidSignup = true;
              setTimeout (() => {
                this.invalidSignup = false ;
             }, 2000);
          }
          else{
            this.error = true;
            setTimeout (() => {
              this.error = false ;
           }, 2000);
          }
        });
    }

    verifyOtp(){
      this.sendOtpForm = this.formbuilder.group({
        otp: ['', Validators.required]
      });
      this.apiService.verifyOtp(this.sendOtpForm.value,this.signupForm.value)
        .subscribe( data => {
          if(data.status == 3){
            this.success = true;
            setTimeout (() => {
              this.success = false ;
           }, 6000);
          }else if(data.status == 1){
              this.invalidSignup = true;
              setTimeout (() => {
                this.invalidSignup = false ;
             }, 2000);
          }
          else{
            this.error = true;
            setTimeout (() => {
              this.error = false ;
           }, 2000);
          }
  
        });
    }
}
  
 

