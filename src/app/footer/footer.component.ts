import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    // (function ($) {
    //   $(document).ready(function () {
    //     $('.popup-with-zoom-anim').magnificPopup({
    //         type: 'inline',
    //         fixedContentPos: false,
    //         fixedBgPos: true,
    //         overflowY: 'auto',
    //         closeBtnInside: true,
    //         preloader: false,
    //         midClick: true,
    //         removalDelay: 300,
    //         mainClass: 'my-mfp-zoom-in'
    //     });

    // });
    // })(jQuery);
  }
}
