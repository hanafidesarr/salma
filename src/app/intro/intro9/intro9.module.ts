import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro9PageRoutingModule } from './intro9-routing.module';

import { Intro9Page } from './intro9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro9PageRoutingModule
  ],
  declarations: [Intro9Page]
})
export class Intro9PageModule {}
