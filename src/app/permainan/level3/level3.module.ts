import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level3PageRoutingModule } from './level3-routing.module';

import { Level3Page } from './level3.page';

import { TimerComponent } from '../timer/timer.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level3PageRoutingModule
  ],
  declarations: [Level3Page, TimerComponent]
})
export class Level3PageModule {}
