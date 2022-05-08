import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Petunjuk3PageRoutingModule } from './petunjuk3-routing.module';

import { Petunjuk3Page } from './petunjuk3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Petunjuk3PageRoutingModule
  ],
  declarations: [Petunjuk3Page]
})
export class Petunjuk3PageModule {}
