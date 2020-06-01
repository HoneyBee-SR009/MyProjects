import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../window-ref.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [WindowRefService]
})

export class PaymentComponent implements OnInit {


  constructor(private winRef: WindowRefService,private apiService: ApiService) {}

  ngOnInit() {}
  
  createRzpayOrder() {
    const options: any = {
      key: 'rzp_test_bjCQFmjjEZQU4l',
      secret: 'KIdcmec2tlssq06ftI25Orbw',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'ABC', // company name or product name
      description: '',  // product description
      image: 'assets/images/c.png', // company logo or product image
      prefill: {
      name: 'Sayantani Rana',
      email: 'sayantanirana@gmail.com',
      contact: 9091399230
      },
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: 'darkseagreen'
      }
    };
    
    // call api to create order_id
    this.apiService.paymentAuth(options)
      .subscribe( data => {
        if(data.status == 1){
         var order_id = data.result;
         this.payWithRazor(order_id);
        }
        else{
          console.log('something went wrong');
        }
    });
    
  }



  payWithRazor(order_id) {
    const options: any = {
      key: 'rzp_test_bjCQFmjjEZQU4l',
      secret: 'KIdcmec2tlssq06ftI25Orbw',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'ABC', // company name or product name
      description: '',  // product description
      image: 'assets/images/c.png', // company logo or product image
      order_id: order_id,
       // order_id created by you in backend
      prefill: {
      name: 'Sayantani Rana',
      email: 'sayantanirana@gmail.com',
      contact: 9091399230
      },
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: 'darkseagreen'
      }
    };
    options.handler = ((response, error) => {
      options.payment_id = response;
      this.apiService.paymentSuccess(options)
      .subscribe( data => {
        console.log('hiiii');
        
        // if(data.status == 1){
        //   console.log(data.result);
        // }
        // else{
        //   console.log(data.result);
        // }
    });
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }
}




  

  