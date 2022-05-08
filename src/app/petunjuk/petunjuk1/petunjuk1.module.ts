import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Petunjuk1PageRoutingModule } from './petunjuk1-routing.module';

import { Petunjuk1Page } from './petunjuk1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Petunjuk1PageRoutingModule
  ],
  declarations: [Petunjuk1Page]
})
export class Petunjuk1PageModule {}
