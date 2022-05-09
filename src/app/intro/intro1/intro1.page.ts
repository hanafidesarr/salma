import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.page.html',
  styleUrls: ['./intro1.page.scss'],
})
export class Intro1Page implements OnInit {

  constructor(public platform: Platform, public smartAudio: SmartAudio) {
    
    this.startVoice()
  }
  
  ionViewWillEnter() {
    this.startVoice()
  }
  ngOnInit() {
  }

  playVoice() {
    this.smartAudio.play('tabSwitch');
  }


  stopVoice() {
    this.smartAudio.stop('tabSwitch');
  }

  startVoice() {
    this.platform.ready().then(() => {
      this.smartAudio.preload('tabSwitch', 'assets/mp3/contoh-suara.mp3');
      this.smartAudio.play('tabSwitch');
    });
  }
}