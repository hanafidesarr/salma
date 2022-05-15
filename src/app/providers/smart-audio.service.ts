import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
@Injectable()
export class SmartAudio {
    audioType: string = 'html5';
    sounds: any = [];
    constructor(public nativeAudio: NativeAudio, platform: Platform) {
        if(platform.is('cordova')){
            this.audioType = 'native';
        }
    }
    preload(key, asset) {
        if(this.audioType === 'html5'){
            let audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };
            this.sounds.push(audio);
        } else {
            this.nativeAudio.preloadSimple(key, asset);
            let audio = {
                key: key,
                asset: key,
                type: 'native'
            };
            this.sounds.push(audio);
        }
    }
    play(key){
        let audio = this.sounds.find((sound) => {
            return sound.key === key;
        });
        if(audio.type === 'html5'){
            let audioAsset = new Audio(audio.asset);
            audioAsset.play();
        } else {
            this.nativeAudio.play(audio.asset).then((res) => {
                console.log(res);
            }, (err) => {
                console.log(err);
            });
        }
    }

    stop(key){

      let audio = this.sounds.find((sound) => {
        return sound.key === key;
      });
      if(audio.type === 'html5'){
          let audioAsset = new Audio(audio.asset);
      } else {
          this.nativeAudio.stop(audio.asset).then((res) => {
              console.log(res);
          }, (err) => {
              console.log(err);
          });
      }
    }

    volume(key){
        this.nativeAudio.setVolumeForComplexAsset(key, 0.1)
    }


    unload(key){
        this.nativeAudio.unload(key)
    }

    loop(key){
        this.nativeAudio.loop(key)
    }
    
}