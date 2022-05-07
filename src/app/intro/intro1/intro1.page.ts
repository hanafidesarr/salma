import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.page.html',
  styleUrls: ['./intro1.page.scss'],
})
export class Intro1Page implements OnInit {

  constructor(platform: Platform, public smartAudio: SmartAudio) {
    
    platform.ready().then(() => {
      smartAudio.preload('tabSwitch', 'assets/mp3/file_example.mp3');
      
      smartAudio.play('tabSwitch');
    });
  }
  

  ngOnInit() {
  }

  playVoice() {
    this.smartAudio.play('tabSwitch');
  }


  stopVoice() {
    this.smartAudio.stop('tabSwitch');
  }

}