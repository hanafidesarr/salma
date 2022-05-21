import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf1PageRoutingModule } from './huruf1-routing.module';

import { Huruf1Page } from './huruf1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf1PageRoutingModule
  ],
  declarations: [Huruf1Page]
})
export class Huruf1PageModule {}
