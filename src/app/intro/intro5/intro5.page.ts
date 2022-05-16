import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SmartAudio } from '../../providers/smart-audio.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-intro5',
  templateUrl: './intro5.page.html',
  styleUrls: ['./intro5.page.scss'],
})
export class Intro5Page implements OnInit {
  collection_timeout_image: any = [];
  timeout_image: any;
  array: any = [
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "tas", url: "assets/icon/bag-child.png", voice: "assets/mp3/tas.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "buku", url: "assets/icon/buku.png", voice: "assets/mp3/buku.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "topi", url: "assets/icon/cap.png", voice: "assets/mp3/topi.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"},
    {name: "baju", url: "assets/icon/baju.png", voice: "assets/mp3/baju.m4a"}
  ];

  constructor(private ElByClassName: ElementRef, public platform: Platform, public smartAudio: SmartAudio, public router: Router) {
    this.smartAudio.preload('topi', 'assets/mp3/topi.m4a');
    this.smartAudio.preload('tas', 'assets/mp3/tas.m4a');
    this.smartAudio.preload('buku', 'assets/mp3/buku.m4a');
    this.smartAudio.preload('baju', 'assets/mp3/baju.m4a');
    this.smartAudio.preload('voice-coba-km-ulangi', 'assets/mp3/voice-coba-km-ulangi.m4a');
    this.smartAudio.preload('intro_voice2', 'assets/mp3/intro-voice2.m4a');
    this.smartAudio.preload('km-hebat', 'assets/mp3/hore-km-hebat.m4a');

  }
  
  ionViewDidEnter() {
    this.startVoice()
  }

  startVoice() {
    this.platform.ready().then(() => {
      this.smartAudio.play('intro_voice2');
    });
  }

  ngOnInit() {
    this.timeout_image = setTimeout(() => {
      let voice = false
      this.spillImage(voice)
    }, 6000)
    

  }

  spillImage(voice) {
    for (let i = 0; i < this.array.length; i++) {
      let student = "gambar4-" + i;
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


  // playVoice() {
  //   this.smartAudio.play('tabSwitch');
  // }

  // stopVoice() {
  //   this.smartAudio.stop('tabSwitch');
  // }
  // ionViewDidLeave() {
  //   this.removeAll()
  // }

  // ionViewWillLeave() {
  //   this.removeAll()
  // }
  
  // removeAll() {
  //   this.smartAudio.stop('tas');
  //   this.smartAudio.stop('intro_voice2');
  //   this.smartAudio.stop('voice-coba-km-ulangi');
  //   this.smartAudio.stop('km-hebat');
  //   if (this.timeout_image != '') {
  //     clearTimeout(this.timeout_image)
  //   }
  //   if (this.collection_timeout_image != '') {
  //     for (let i = 0; i < this.collection_timeout_image.length; i++) {
  //       clearTimeout(this.collection_timeout_image[i])
  //     }
  //   }
  // }
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

    this.smartAudio.stop('tas');
    this.smartAudio.stop('intro_voice2');
    this.smartAudio.stop('voice-coba-km-ulangi');
    this.smartAudio.stop('km-hebat');
    clearTimeout(this.timeout_image)
    if (this.collection_timeout_image != '') {
      for (let i = 0; i < this.collection_timeout_image.length; i++) {
        clearTimeout(this.collection_timeout_image[i])
      }
    }

  }
}
