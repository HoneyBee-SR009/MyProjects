import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topcarousel',
  templateUrl: './topcarousel.component.html',
  styleUrls: ['./topcarousel.component.css']
})
export class TopcarouselComponent implements OnInit {
  hidesec: any = 1;

  constructor(config: NgbCarouselConfig,) {
    config.interval = 4000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false; 
   }

  ngOnInit() {
    localStorage.setItem('hidesec', JSON.stringify(this.hidesec));
  }

  hideSection(){
    if(JSON.parse(localStorage.getItem('hidesec')) >= 2){
      return true;
    }
    else{
      return false;
    }
  }

}
