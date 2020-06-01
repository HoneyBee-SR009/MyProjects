
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) { }


  paymentAuth(data:any): Observable<any> {
    return this.http.post(environment.paymentUrl,data);
  }

  paymentSuccess(data:any): Observable<any> {
    return this.http.post(environment.paymentSuccessUrl,data);
  }

  signupUser(data:any): Observable<any> {
    return this.http.post(environment.signupUrl,data);
  }

  verifyOtp(otp:any,email:any): Observable<any> {
    return this.http.post(environment.verifyOtpUrl,email,otp);
  }
  
}





