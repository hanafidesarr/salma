import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-huruf5',
  templateUrl: './huruf5.page.html',
  styleUrls: ['./huruf5.page.scss'],
})
export class Huruf5Page implements OnInit {

  loading: any;
  timeout_image: any = [];
  collection_timeout_image: any = [];
  array: any = [
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},
    {name: "a-hitam", url: "assets/icon/a-hitam.png", voice: "assets/mp3/a.m4a"},

    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},
    {name: "s-hitam", url: "assets/icon/s-hitam.png", voice: "assets/mp3/s.m4a"},

    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},
    {name: "o-hitam", url: "assets/icon/o-hitam.png", voice: "assets/mp3/o.m4a"},

    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},
    {name: "d-hitam", url: "assets/icon/d-hitam.png", voice: "assets/mp3/d.m4a"},

    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
    {name: "p-hitam", url: "assets/icon/p-hitam.png", voice: "assets/mp3/p.m4a"},
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    
    this.platform.ready().then(() => {
      this.smartAudio.preload('sebutkan-huruf-beri-contoh', 'assets/mp3/sebutkan-huruf-beri-contoh.m4a');
      this.smartAudio.preload('a-hitam', 'assets/mp3/a.m4a');
      this.smartAudio.preload('s-hitam', 'assets/mp3/s.m4a');
      this.smartAudio.preload('o-hitam', 'assets/mp3/o.m4a');
      this.smartAudio.preload('d-hitam', 'assets/mp3/d.m4a');
      this.smartAudio.preload('p-hitam', 'assets/mp3/p.m4a');
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
      let student = "huruf5-" + i;
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

    this.smartAudio.stop('a-hitam');
    this.smartAudio.stop('s-hitam');
    this.smartAudio.stop('o-hitam');
    this.smartAudio.stop('d-hitam');
    this.smartAudio.stop('p-hitam');

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
