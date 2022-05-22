import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-huruf8',
  templateUrl: './huruf8.page.html',
  styleUrls: ['./huruf8.page.scss'],
})
export class Huruf8Page implements OnInit {

  loading: any;
  timeout_image: any = [];
  collection_timeout_image: any = [];
  array: any = [
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},

    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/tas.m4a"},

    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/tas.m4a"},

    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},

    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/tas.m4a"},
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    this.smartAudio.preload('tas', 'assets/mp3/tas.m4a');
    this.smartAudio.preload('voice-coba-km-ulangi', 'assets/mp3/voice-coba-km-ulangi.m4a');
    this.smartAudio.preload('km-hebat', 'assets/mp3/hore-km-hebat.m4a');
  }


  
  ionViewDidEnter() {
    var elems = Array.from(document.querySelectorAll<HTMLElement>('.image-class'))
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.width = '1rem'
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
    this.startVoice()
  }

  spillImage(voice) {
    for (let i = 0; i < this.array.length; i++) {
      let student = "huruf8-" + i;
      if (voice == false) {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '1rem'
      }
      let xxx = setTimeout(() => {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '2rem'

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

    this.smartAudio.stop('tas');
    this.smartAudio.stop('sebutkan-huruf-beri-contoh');
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
