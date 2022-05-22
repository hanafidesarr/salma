import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-warna3',
  templateUrl: './warna3.page.html',
  styleUrls: ['./warna3.page.scss'],
})
export class Warna3Page implements OnInit {
  collection_timeout_image: any = [];
  timeout_image: any;
  array: any = [
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},

    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "biru", url: "assets/icon/biru.png", voice: "assets/mp3/biru.m4a"},
    {name: "merah", url: "assets/icon/merah.png", voice: "assets/mp3/merah.m4a"},

    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
    {name: "hijau", url: "assets/icon/hijau.png", voice: "assets/mp3/hijau.m4a"},
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    this.smartAudio.preload('hijau', 'assets/mp3/hijau.m4a');
    this.smartAudio.preload('voice-coba-km-ulangi', 'assets/mp3/voice-coba-km-ulangi.m4a');
    this.smartAudio.preload('sebutkan-warna-bisu', 'assets/mp3/sebutkan-warna-bisu.m4a');
    this.smartAudio.preload('km-hebat', 'assets/mp3/hore-km-hebat.m4a');

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
      this.spillImage(false)
    }, 5000)
  }

  startVoice() {
    this.platform.ready().then(() => {
      this.smartAudio.play('sebutkan-warna-bisu');
    });
  }

  ngOnInit() {
    this.startVoice()
  }

  spillImage(voice) {
    for (let i = 0; i < this.array.length; i++) {
      let student = "warna3-" + i;
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

  km_hebat() {
    this.platform.ready().then(() => {
      this.smartAudio.play('km-hebat');
    })
  }

  ionViewDidLeave() {

    this.smartAudio.stop('sebutkan-warna-bisu');
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

}
