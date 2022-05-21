import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf6PageRoutingModule } from './huruf6-routing.module';

import { Huruf6Page } from './huruf6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf6PageRoutingModule
  ],
  declarations: [Huruf6Page]
})
export class Huruf6PageModule {}
