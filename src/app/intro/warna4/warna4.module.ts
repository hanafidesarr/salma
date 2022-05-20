import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna4PageRoutingModule } from './warna4-routing.module';

import { Warna4Page } from './warna4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna4PageRoutingModule
  ],
  declarations: [Warna4Page]
})
export class Warna4PageModule {}
