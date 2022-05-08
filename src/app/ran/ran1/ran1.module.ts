import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ran1PageRoutingModule } from './ran1-routing.module';

import { Ran1Page } from './ran1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ran1PageRoutingModule
  ],
  declarations: [Ran1Page]
})
export class Ran1PageModule {}
