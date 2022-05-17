import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna3PageRoutingModule } from './warna3-routing.module';

import { Warna3Page } from './warna3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna3PageRoutingModule
  ],
  declarations: [Warna3Page]
})
export class Warna3PageModule {}
