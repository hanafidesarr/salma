import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
@Component({
  selector: 'app-level1',
  templateUrl: './level1.page.html',
  styleUrls: ['./level1.page.scss'],
})
export class Level1Page implements OnInit {


  @ViewChild(TimerComponent) timer: TimerComponent;
 
  appName = 'Ionic App';
 
  constructor() { 
  }
 
  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }
}
