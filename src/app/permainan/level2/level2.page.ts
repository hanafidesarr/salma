import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
@Component({
  selector: 'app-level2',
  templateUrl: './level2.page.html',
  styleUrls: ['./level2.page.scss'],
})
export class Level2Page implements OnInit {


  @ViewChild(TimerComponent) timer: TimerComponent;
 
  appName = 'Ionic App';
  start: any = false
 
  array: any = [
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},

    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},

    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},

    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "kuning", url: "assets/icon/kuning.png", voice: "assets/mp3/kuning.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "hitam", url: "assets/icon/hitam.png", voice: "assets/mp3/hitam.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
  ];
  constructor() { 
  }
 
  startGame() {
    this.start = true
    this.timer.startTimer();
    this.timer.spillImage(this.array, "level2")
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
