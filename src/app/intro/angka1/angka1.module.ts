import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka1PageRoutingModule } from './angka1-routing.module';

import { Angka1Page } from './angka1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka1PageRoutingModule
  ],
  declarations: [Angka1Page]
})
export class Angka1PageModule {}
