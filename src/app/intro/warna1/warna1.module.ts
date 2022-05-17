import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna1PageRoutingModule } from './warna1-routing.module';

import { Warna1Page } from './warna1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna1PageRoutingModule
  ],
  declarations: [Warna1Page]
})
export class Warna1PageModule {}
