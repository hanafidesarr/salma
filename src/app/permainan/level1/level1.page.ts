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
  start: any = false
 
  array: any = [
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},

    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},

    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},

    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},

    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "pensil", url: "assets/icon/pensil.png", voice: "assets/mp3/pensil.m4a"},

  ];
  constructor() { 
  }
 
  startGame() {
    this.start = true
    this.timer.initTimer()
    this.timer.startTimer();
    this.timer.spillImage(this.array, "level1")
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
