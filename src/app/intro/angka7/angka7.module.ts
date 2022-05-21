import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka7PageRoutingModule } from './angka7-routing.module';

import { Angka7Page } from './angka7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka7PageRoutingModule
  ],
  declarations: [Angka7Page]
})
export class Angka7PageModule {}
