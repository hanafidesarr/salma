import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro10PageRoutingModule } from './intro10-routing.module';

import { Intro10Page } from './intro10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro10PageRoutingModule
  ],
  declarations: [Intro10Page]
})
export class Intro10PageModule {}
