import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcarousel',
  templateUrl: './productcarousel.component.html',
  styleUrls: ['./productcarousel.component.css']
})
export class ProductcarouselComponent implements OnInit {
  mySlideImages = ['../assets/images/fresho-lemon-kagji.jpg',
  '../assets/images/chips.jpg',
  '../assets/images/maaza.jpg',
  '../assets/images/fresho-rosemary.jpg',
  '../assets/images/oral.jpg',
  '../assets/images/p4.jpg',
  '../assets/images/chips.jpg',
  '../assets/images/p4.jpg',
  '../assets/images/p6.jpg',
  '../assets/images/watermelon.jpg'];
  
  
  mySlideOptions={
    dots: false,
    items: 8, 
    nav: true,
    loop: true,
    margin: 2,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true};
    

  constructor() { }

  ngOnInit() {
  }

}
