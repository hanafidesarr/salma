import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna6PageRoutingModule } from './warna6-routing.module';

import { Warna6Page } from './warna6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna6PageRoutingModule
  ],
  declarations: [Warna6Page]
})
export class Warna6PageModule {}
