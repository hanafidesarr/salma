import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf7PageRoutingModule } from './huruf7-routing.module';

import { Huruf7Page } from './huruf7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf7PageRoutingModule
  ],
  declarations: [Huruf7Page]
})
export class Huruf7PageModule {}
