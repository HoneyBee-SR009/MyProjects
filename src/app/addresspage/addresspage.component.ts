import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addresspage',
  templateUrl: './addresspage.component.html',
  styleUrls: ['./addresspage.component.css']
})
export class AddresspageComponent implements OnInit {
  hidesec: any = 2;
  hidecart: any = 3;

  constructor() { }

  ngOnInit() {
    localStorage.setItem('hidesec', JSON.stringify(this.hidesec));
    localStorage.setItem('hidecart', JSON.stringify(this.hidecart));
  }

}
