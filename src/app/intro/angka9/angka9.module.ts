import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka9PageRoutingModule } from './angka9-routing.module';

import { Angka9Page } from './angka9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka9PageRoutingModule
  ],
  declarations: [Angka9Page]
})
export class Angka9PageModule {}
