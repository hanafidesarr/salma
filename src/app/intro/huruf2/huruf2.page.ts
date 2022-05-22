import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-huruf2',
  templateUrl: './huruf2.page.html',
  styleUrls: ['./huruf2.page.scss'],
})
export class Huruf2Page implements OnInit {

  loading: any;
  timeout_image: any = [];
  collection_timeout_image: any = [];
  array: any = [
    {name: "a-ungu", url: "assets/icon/a-ungu.png", voice: "assets/mp3/a.m4a"},
    {name: "a-ungu", url: "assets/icon/a-ungu.png", voice: "assets/mp3/a.m4a"},
    {name: "a-ungu", url: "assets/icon/a-ungu.png", voice: "assets/mp3/a.m4a"},
    {name: "a-ungu", url: "assets/icon/a-ungu.png", voice: "assets/mp3/a.m4a"},
    {name: "a-ungu", url: "assets/icon/a-ungu.png", voice: "assets/mp3/a.m4a"},

    {name: "s-ungu", url: "assets/icon/s-ungu.png", voice: "assets/mp3/s.m4a"},
    {name: "s-ungu", url: "assets/icon/s-ungu.png", voice: "assets/mp3/s.m4a"},
    {name: "s-ungu", url: "assets/icon/s-ungu.png", voice: "assets/mp3/s.m4a"},
    {name: "s-ungu", url: "assets/icon/s-ungu.png", voice: "assets/mp3/s.m4a"},
    {name: "s-ungu", url: "assets/icon/s-ungu.png", voice: "assets/mp3/s.m4a"},
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    
    this.platform.ready().then(() => {
      this.smartAudio.preload('sebutkan-huruf-beri-contoh', 'assets/mp3/sebutkan-huruf-beri-contoh.m4a');
      this.smartAudio.preload('a-ungu', 'assets/mp3/a.m4a');
      this.smartAudio.preload('s-ungu', 'assets/mp3/s.m4a');
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
      this.smartAudio.preload('sebutkan-huruf-beri-contoh', 'assets/mp3/sebutkan-huruf-beri-contoh.m4a');
      this.smartAudio.play('sebutkan-huruf-beri-contoh');
    });
  }

  ngOnInit() {
  }

  spillImage(voice) {
    for (let i = 0; i < this.array.length; i++) {
      let student = "huruf2-" + i;
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

    this.smartAudio.stop('sebutkan-huruf-beri-contoh');
    this.smartAudio.stop('a-ungu');
    this.smartAudio.stop('s-ungu');
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
