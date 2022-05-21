import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf4PageRoutingModule } from './huruf4-routing.module';

import { Huruf4Page } from './huruf4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf4PageRoutingModule
  ],
  declarations: [Huruf4Page]
})
export class Huruf4PageModule {}
