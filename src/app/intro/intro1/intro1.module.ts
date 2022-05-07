import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro1PageRoutingModule } from './intro1-routing.module';

import { Intro1Page } from './intro1.page';

import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

import { SmartAudio } from '../../providers/smart-audio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro1PageRoutingModule
  ],
  providers: [
    NativeAudio,
    SmartAudio
  ],
  declarations: [Intro1Page]
})
export class Intro1PageModule {}
