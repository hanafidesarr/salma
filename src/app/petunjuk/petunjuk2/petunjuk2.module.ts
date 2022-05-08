import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Petunjuk2PageRoutingModule } from './petunjuk2-routing.module';

import { Petunjuk2Page } from './petunjuk2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Petunjuk2PageRoutingModule
  ],
  declarations: [Petunjuk2Page]
})
export class Petunjuk2PageModule {}
