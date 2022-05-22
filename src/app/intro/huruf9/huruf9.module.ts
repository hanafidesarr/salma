import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf9PageRoutingModule } from './huruf9-routing.module';

import { Huruf9Page } from './huruf9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf9PageRoutingModule
  ],
  declarations: [Huruf9Page]
})
export class Huruf9PageModule {}
