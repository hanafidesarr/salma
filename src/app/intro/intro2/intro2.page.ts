import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';
@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
})
export class Intro2Page implements OnInit {
  
  array: any = [
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"}
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio) {}
  
  ionViewDidEnter() {
    this.startVoice()
  }

  startVoice() {
    this.platform.ready().then(() => {
      this.smartAudio.preload('tabSwitch', 'assets/mp3/contoh-suara.mp3');
      this.smartAudio.play('tabSwitch');
    });
  }

  voiceElement(name, url_voice) {
    this.smartAudio.play(name);
  }
  
  ngOnInit() {
    this.startVoice()
    setTimeout(() => {
      this.spillImage()
    }, 4000)
    
  }

  spillImage() {
    for (let i = 0; i < this.array.length; i++) {
      let student = "gambar-" + i;
      this.smartAudio.preload(this.array[i].name, this.array[i].voice);

      setTimeout(() => {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '5rem'
        this.voiceElement(this.array[i].name, this.array[i].voice);
      }, 3000*(i+1));
    }
  }

  youSmart() {
    this.smartAudio.preload('fileExample', 'assets/mp3/file_example.mp3');
    this.smartAudio.play('fileExample');
  }

  // playVoice() {
  //   this.smartAudio.play('tabSwitch');
  // }

  // stopVoice() {
  //   this.smartAudio.stop('tabSwitch');
  // }
}
