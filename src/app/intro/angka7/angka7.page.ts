import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-angka7',
  templateUrl: './angka7.page.html',
  styleUrls: ['./angka7.page.scss'],
})
export class Angka7Page implements OnInit {

  loading: any;
  timeout_image: any = [];
  collection_timeout_image: any = [];
  array: any = [
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},

    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},

    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "7-hitam", url: "assets/icon/7-hitam.png", voice: "assets/mp3/7.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},

    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "6-hitam", url: "assets/icon/6-hitam.png", voice: "assets/mp3/6.m4a"},
    {name: "9-hitam", url: "assets/icon/9-hitam.png", voice: "assets/mp3/9.m4a"},
    {name: "4-hitam", url: "assets/icon/4-hitam.png", voice: "assets/mp3/4.m4a"},
    {name: "2-hitam", url: "assets/icon/2-hitam.png", voice: "assets/mp3/2.m4a"},
  
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    
    this.platform.ready().then(() => {
      this.smartAudio.preload('sebutkan-angka-beri-contoh', 'assets/mp3/sebutkan-angka-beri-contoh.m4a');
      this.smartAudio.preload('2-hitam', 'assets/mp3/2.m4a');
      this.smartAudio.preload('4-hitam', 'assets/mp3/4.m4a');
      this.smartAudio.preload('6-hitam', 'assets/mp3/6.m4a');
      this.smartAudio.preload('7-hitam', 'assets/mp3/7.m4a');
      this.smartAudio.preload('9-hitam', 'assets/mp3/9.m4a');

      this.smartAudio.preload('voice-coba-km-ulangi', 'assets/mp3/voice-coba-km-ulangi.m4a');
      this.smartAudio.preload('km-hebat', 'assets/mp3/hore-km-hebat.m4a');
    })
  }


  
  ionViewDidEnter() {
    var elems = Array.from(document.querySelectorAll<HTMLElement>('.image-class'))
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.width = '2rem'
    }
    this.startVoice()
    this.timeout_image = setTimeout(() => {
      let voice = true
      this.spillImage(voice)
    }, 4000)
  }


  startVoice() {
    this.platform.ready().then(() => {
      this.smartAudio.preload('sebutkan-angka-beri-contoh', 'assets/mp3/sebutkan-angka-beri-contoh.m4a');
      this.smartAudio.play('sebutkan-angka-beri-contoh');
    });
  }

  ngOnInit() {
  }

  spillImage(voice) {
    for (let i = 0; i < this.array.length; i++) {
      let student = "angka7-" + i;
      if (voice == false) {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '2rem'
      }
      let xxx = setTimeout(() => {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '3rem'

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

  coba_ulangi() {
    this.platform.ready().then(() => {
      this.smartAudio.play('voice-coba-km-ulangi');
      setTimeout(() => {
        let voice = false
        this.spillImage(voice)
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

    this.smartAudio.stop('2-hitam');
    this.smartAudio.stop('4-hitam');
    this.smartAudio.stop('6-hitam');
    this.smartAudio.stop('7-hitam');
    this.smartAudio.stop('9-hitam');

    this.smartAudio.stop('sebutkan-angka-beri-contoh');
    this.smartAudio.stop('voice-coba-km-ulangi');
    this.smartAudio.stop('km-hebat');
    if (this.timeout_image != '') {
      clearTimeout(this.timeout_image)
    }
    if (this.collection_timeout_image != '') {
      for (let i = 0; i < this.collection_timeout_image.length; i++) {
        clearTimeout(this.collection_timeout_image[i])
      }
    }

  }


  km_hebat() {
    this.platform.ready().then(() => {
      this.smartAudio.play('km-hebat');
    })
  }
}
