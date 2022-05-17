import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna2PageRoutingModule } from './warna2-routing.module';

import { Warna2Page } from './warna2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna2PageRoutingModule
  ],
  declarations: [Warna2Page]
})
export class Warna2PageModule {}
