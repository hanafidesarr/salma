import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level1PageRoutingModule } from './level1-routing.module';

import { Level1Page } from './level1.page';

import { TimerComponent } from '../timer/timer.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level1PageRoutingModule
  ],
  declarations: [Level1Page, TimerComponent]
})
export class Level1PageModule {}
