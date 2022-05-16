import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-intro3',
  templateUrl: './intro3.page.html',
  styleUrls: ['./intro3.page.scss'],
})
export class Intro3Page implements OnInit {
  collection_timeout_image: any = [];
  array: any = [
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"}
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    this.startVoice()
    this.smartAudio.preload('topi', 'assets/mp3/topi.m4a');
    this.smartAudio.preload('tas', 'assets/mp3/tas.m4a');
    this.smartAudio.preload('voice-coba-km-ulangi', 'assets/mp3/voice-coba-km-ulangi.m4a');
    this.smartAudio.preload('km-hebat', 'assets/mp3/hore-km-hebat.m4a');
  }
  
  ionViewDidEnter() {
    this.startVoice()
  }

  startVoice() {
    this.platform.ready().then(() => {
      this.smartAudio.preload('intro_voice1', 'assets/mp3/intro-voice1.m4a');
      this.smartAudio.play('intro_voice1');
    });
  }

  ngOnInit() {
    setTimeout(() => {
      let voice = true
      this.spillImage(voice)
    }, 4000)
    
  }

  spillImage(voice) {
    for (let i = 0; i < this.array.length; i++) {
      let student = "gambar2-" + i;
      if (voice == false) {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '2rem'
      }
      let xxx = setTimeout(() => {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '4rem'

        if (voice == true) {
          this.smartAudio.play(this.array[i].name);
        }

        if (i+1 == this.array.length) {
          setTimeout(() => {
            if (voice == true) {
              this.coba_ulangi()
            } else {
              this.km_hebat()
            }
          }, 3000)
        }

      }, 3000*(i+1));

      this.collection_timeout_image.push(xxx)
    }
  }

  lulu() {
    for (let i = 0; i < this.array.length; i++) {
      let student = "gambar2-" + i;
      (<HTMLElement>document.querySelector('.' + student)).style.width = '2rem !important'
    }
  }

  // playVoice() {
  //   this.smartAudio.play('tabSwitch');
  // }

  // stopVoice() {
  //   this.smartAudio.stop('tabSwitch');
  // }

  ionViewDidLeave() {
    this.smartAudio.unload('topi');
    this.smartAudio.unload('tas');
    for (let i = 0; i < this.collection_timeout_image.length; i++) {
      clearTimeout(this.collection_timeout_image[i])
    }
  }

  coba_ulangi() {
    this.platform.ready().then(() => {
      this.smartAudio.play('voice-coba-km-ulangi');
      setTimeout(() => {
        let voice = false
        this.spillImage(voice)
      }, 3000)
    })
  }

  km_hebat() {
    this.platform.ready().then(() => {
      this.smartAudio.play('km-hebat');
    })
  }
}
