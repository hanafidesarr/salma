import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Huruf3PageRoutingModule } from './huruf3-routing.module';

import { Huruf3Page } from './huruf3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Huruf3PageRoutingModule
  ],
  declarations: [Huruf3Page]
})
export class Huruf3PageModule {}
