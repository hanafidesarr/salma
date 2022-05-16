import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro3PageRoutingModule } from './intro3-routing.module';

import { Intro3Page } from './intro3.page';

import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { SmartAudio } from '../../providers/smart-audio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro3PageRoutingModule
  ],
  providers: [
    NativeAudio,
    SmartAudio
  ],
  declarations: [Intro3Page]
})
export class Intro3PageModule {}
