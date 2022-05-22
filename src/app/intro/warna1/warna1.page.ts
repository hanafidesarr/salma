import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-warna1',
  templateUrl: './warna1.page.html',
  styleUrls: ['./warna1.page.scss'],
})
export class Warna1Page implements OnInit {

  loading: any;
  timeout_image: any = [];
  collection_timeout_image: any = [];
  array: any = [
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"}
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    
    this.platform.ready().then(() => {
      this.smartAudio.preload('coba-sebutkan-warna', 'assets/mp3/coba-sebutkan-warna.m4a');
      this.smartAudio.preload('merah', 'assets/mp3/merah.m4a');
      this.smartAudio.preload('voice-coba-km-ulangi', 'assets/mp3/voice-coba-km-ulangi.m4a');
      this.smartAudio.preload('km-hebat', 'assets/mp3/hore-km-hebat.m4a');
    })
  }


  
  ionViewDidEnter() {
    var elems = Array.from(document.querySelectorAll<HTMLElement>('.image-class'))
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.width = '3rem'
    }
    this.startVoice()
    this.timeout_image = setTimeout(() => {
      let voice = true
      this.spillImage(voice)
    }, 4000)
  }

  startVoice() {
    this.platform.ready().then(() => {
      this.smartAudio.preload('coba-sebutkan-warna', 'assets/mp3/coba-sebutkan-warna.m4a');
      this.smartAudio.play('coba-sebutkan-warna');
    });
  }

  ngOnInit() {
  }

  spillImage(voice) {
    for (let i = 0; i < this.array.length; i++) {
      let student = "gambar1-" + i;
      if (voice == false) {
        (<HTMLElement>document.querySelector('.' + student)).style.width = '3rem'
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

    this.smartAudio.stop('merah');
    this.smartAudio.stop('coba-sebutkan-warna');
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
