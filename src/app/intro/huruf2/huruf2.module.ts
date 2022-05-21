import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf2PageRoutingModule } from './huruf2-routing.module';

import { Huruf2Page } from './huruf2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf2PageRoutingModule
  ],
  declarations: [Huruf2Page]
})
export class Huruf2PageModule {}
