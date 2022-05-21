import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka2PageRoutingModule } from './angka2-routing.module';

import { Angka2Page } from './angka2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka2PageRoutingModule
  ],
  declarations: [Angka2Page]
})
export class Angka2PageModule {}
