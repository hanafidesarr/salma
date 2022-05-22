import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
@Component({
  selector: 'app-level4',
  templateUrl: './level4.page.html',
  styleUrls: ['./level4.page.scss'],
})
export class Level4Page implements OnInit {


  @ViewChild(TimerComponent) timer: TimerComponent;
 
  appName = 'Ionic App';
  start: any = false
 
  array: any = [
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},

    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},

    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},

    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},

    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
  ];
  constructor() { 
  }
 
  startGame() {
    this.start = true
    this.timer.startTimer();
    this.timer.spillImage(this.array, "level4")
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
