import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ran3PageRoutingModule } from './ran3-routing.module';

import { Ran3Page } from './ran3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ran3PageRoutingModule
  ],
  declarations: [Ran3Page]
})
export class Ran3PageModule {}
