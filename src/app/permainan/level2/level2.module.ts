import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level2PageRoutingModule } from './level2-routing.module';

import { Level2Page } from './level2.page';

import { TimerComponent } from '../timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level2PageRoutingModule
  ],
  declarations: [Level2Page, TimerComponent]
})
export class Level2PageModule {}
