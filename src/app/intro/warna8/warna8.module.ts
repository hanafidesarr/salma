import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna8PageRoutingModule } from './warna8-routing.module';

import { Warna8Page } from './warna8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna8PageRoutingModule
  ],
  declarations: [Warna8Page]
})
export class Warna8PageModule {}
