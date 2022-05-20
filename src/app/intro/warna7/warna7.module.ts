import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna7PageRoutingModule } from './warna7-routing.module';

import { Warna7Page } from './warna7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna7PageRoutingModule
  ],
  declarations: [Warna7Page]
})
export class Warna7PageModule {}
