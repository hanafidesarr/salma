import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
@Component({
  selector: 'app-level3',
  templateUrl: './level3.page.html',
  styleUrls: ['./level3.page.scss'],
})
export class Level3Page implements OnInit {


  @ViewChild(TimerComponent) timer: TimerComponent;
 
  appName = 'Ionic App';
  start: any = false
 
  array: any = [
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},

    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},

    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},

    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},

    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
  ];
  constructor() { 
  }
 
  startGame() {
    this.start = true
    this.timer.initTimer()
    this.timer.startTimer();
    this.timer.spillImage(this.array, "level3")
  }

  stopGame() {
    this.start = false
    this.timer.initTimer()
    this.timer.stopSpill()
  }
  ngOnInit() {
  }


  ionViewDidLeave() {
    this.stopGame()
  }
}
