import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka5PageRoutingModule } from './angka5-routing.module';

import { Angka5Page } from './angka5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka5PageRoutingModule
  ],
  declarations: [Angka5Page]
})
export class Angka5PageModule {}
