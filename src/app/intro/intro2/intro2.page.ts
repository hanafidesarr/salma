import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
})
export class Intro2Page implements OnInit {

  spill_image: any = [];
  array: any = [
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"}
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {

    this.smartAudio.preload('voice-coba-km-ulangi', 'assets/mp3/voice-coba-km-ulangi.m4a');
    this.smartAudio.preload('km-hebat', 'assets/mp3/hore-km-hebat.m4a');

    this.platform.backButton.subscribeWithPriority(10, () => {

      this.spillImage()
      this.smartAudio.unload("intro_voice1");
      this.smartAudio.unload("tas");
      this.smartAudio.unload("voice-coba-km-ulangi");
      this.smartAudio.unload("km-hebat");

      // this.router.navigateByUrl('/intro', { replaceUrl: true }) 
    });
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

      let timeout = setTimeout(() => {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '5rem'
        this.voiceElement(this.array[i].name, this.array[i].voice);

        this.spill_image.push(timeout)
        let index = i+1
        const aray_length = this.array.length

        if (index == aray_length) {
          setTimeout(() => {
            this.youSmart()
          }, 3000)
        }
      }, 3000*(i+1));
    }
  }

  youSmart() {

    this.platform.ready().then(() => {
      this.smartAudio.play('voice-coba-km-ulangi');
      setTimeout(() => {
        this.spillImage2()
      }, 3000)
    })
  }

  // playVoice() {
  //   this.smartAudio.play('tabSwitch');
  // }

  // stopVoice() {
  //   this.smartAudio.stop('tabSwitch');
  // }

  ionViewDidLeave() {
  }

  spillImage2() {
    
    for (let i = 0; i < this.array.length; i++) {
      
      let student = "gambar-" + i;
      (<HTMLElement>document.querySelector('.' + student)).style.width = '3rem'
      this.smartAudio.preload(this.array[i].name, this.array[i].voice);

      let timeout = setTimeout(() => {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '5rem'

        this.spill_image.push(timeout)
        let index = i+1
        const aray_length = this.array.length

        if (index == aray_length) {
          setTimeout(() => {
            this.km_hebat()
          }, 2000)
        }
      }, 3000*(i+1));
      this.spill_image.push(timeout)
    }
  }

  km_hebat() {
    this.platform.ready().then(() => {
      this.smartAudio.play('km-hebat');
    })
  }
}
