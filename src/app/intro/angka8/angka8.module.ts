import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka8PageRoutingModule } from './angka8-routing.module';

import { Angka8Page } from './angka8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka8PageRoutingModule
  ],
  declarations: [Angka8Page]
})
export class Angka8PageModule {}
