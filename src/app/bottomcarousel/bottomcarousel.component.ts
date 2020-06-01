import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bottomcarousel',
  templateUrl: './bottomcarousel.component.html',
  styleUrls: ['./bottomcarousel.component.css']
})
export class BottomcarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {  
    config.interval = 4000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
