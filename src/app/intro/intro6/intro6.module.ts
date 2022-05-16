import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro6PageRoutingModule } from './intro6-routing.module';

import { Intro6Page } from './intro6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro6PageRoutingModule
  ],
  declarations: [Intro6Page]
})
export class Intro6PageModule {}
