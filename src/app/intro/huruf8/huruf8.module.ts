import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf8PageRoutingModule } from './huruf8-routing.module';

import { Huruf8Page } from './huruf8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf8PageRoutingModule
  ],
  declarations: [Huruf8Page]
})
export class Huruf8PageModule {}
