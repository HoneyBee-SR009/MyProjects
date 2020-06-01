import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;

  constructor( private productservice: ProductService) { }

  ngOnInit() {
  }

}
