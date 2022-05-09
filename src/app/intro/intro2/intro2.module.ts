import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro2PageRoutingModule } from './intro2-routing.module';

import { Intro2Page } from './intro2.page';

import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { SmartAudio } from '../../providers/smart-audio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro2PageRoutingModule
  ],
  providers: [
    NativeAudio,
    SmartAudio
  ],
  declarations: [Intro2Page]
})
export class Intro2PageModule {}
