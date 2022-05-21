import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka6PageRoutingModule } from './angka6-routing.module';

import { Angka6Page } from './angka6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka6PageRoutingModule
  ],
  declarations: [Angka6Page]
})
export class Angka6PageModule {}
