import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf5PageRoutingModule } from './huruf5-routing.module';

import { Huruf5Page } from './huruf5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf5PageRoutingModule
  ],
  declarations: [Huruf5Page]
})
export class Huruf5PageModule {}
