import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BottomcarouselComponent } from './bottomcarousel/bottomcarousel.component';
import { CategorywiseproductComponent } from './categorywiseproduct/categorywiseproduct.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CheckoutComponent } from './checkout/checkout.component'
import { TopcarouselComponent } from './topcarousel/topcarousel.component';
import { AddresspageComponent } from './addresspage/addresspage.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductcarouselComponent } from './productcarousel/productcarousel.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'bottomcarousel', component: BottomcarouselComponent},
  { path: 'product', component: CategorywiseproductComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'topcarousel', component: TopcarouselComponent},
  { path: 'address', component: AddresspageComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'productcarousel', component: ProductcarouselComponent},
  { path: 'placeorder', component: OrderplacedComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
