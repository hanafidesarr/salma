import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna9PageRoutingModule } from './warna9-routing.module';

import { Warna9Page } from './warna9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna9PageRoutingModule
  ],
  declarations: [Warna9Page]
})
export class Warna9PageModule {}
