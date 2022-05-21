import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka4PageRoutingModule } from './angka4-routing.module';

import { Angka4Page } from './angka4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka4PageRoutingModule
  ],
  declarations: [Angka4Page]
})
export class Angka4PageModule {}
