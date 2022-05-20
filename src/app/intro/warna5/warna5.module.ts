import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Warna5PageRoutingModule } from './warna5-routing.module';

import { Warna5Page } from './warna5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Warna5PageRoutingModule
  ],
  declarations: [Warna5Page]
})
export class Warna5PageModule {}
