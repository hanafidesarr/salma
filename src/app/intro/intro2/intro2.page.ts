import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
})
export class Intro2Page implements OnInit {

  id: any;
  constructor() { }

  @Input() step: string;
  ngOnInit() {

    // this.createNotification();
  
    // setInterval(() => {
    //   this.createNotification();
    // }, 3000);
  }
  createNotification() {
    console.log("aaaa")
  }
  
}
