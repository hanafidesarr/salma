import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ran4PageRoutingModule } from './ran4-routing.module';

import { Ran4Page } from './ran4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ran4PageRoutingModule
  ],
  declarations: [Ran4Page]
})
export class Ran4PageModule {}
