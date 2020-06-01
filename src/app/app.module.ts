import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BottomcarouselComponent } from './bottomcarousel/bottomcarousel.component';
import { CategorywiseproductComponent } from './categorywiseproduct/categorywiseproduct.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShoppingCartModule } from 'ng-shopping-cart'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout/checkout.component';
import { TopcarouselComponent } from './topcarousel/topcarousel.component';
import { AddresspageComponent } from './addresspage/addresspage.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { PaymentComponent } from './payment/payment.component';
import { ProductcarouselComponent } from './productcarousel/productcarousel.component';
import { OwlModule } from 'ngx-owl-carousel';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';


let config = new AuthServiceConfig([
  {  
    id: GoogleLoginProvider.PROVIDER_ID,  
    provider: new GoogleLoginProvider('594216734902-lv3qrlrotetivgbk00a7dfdukep0m7o3.apps.googleusercontent.com')  
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("3015212625203920")
  }
 
]);
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BottomcarouselComponent,
    CategorywiseproductComponent,
    SidebarComponent,
    CheckoutComponent,
    TopcarouselComponent,
    AddresspageComponent,
    PaymentComponent,
    ProductcarouselComponent,
    OrderplacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SocialLoginModule,
    ShoppingCartModule.forRoot({ // <-- Add the cart module to your root module // <-- Configuration is optional
      serviceType: 'localStorage',
      // serviceOptions: {
      //   storageKey: 'NgShoppingCart',
      //   clearOnError: true
      // }
    }),
    FontAwesomeModule,
    OwlModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
