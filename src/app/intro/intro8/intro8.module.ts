import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro8PageRoutingModule } from './intro8-routing.module';

import { Intro8Page } from './intro8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro8PageRoutingModule
  ],
  declarations: [Intro8Page]
})
export class Intro8PageModule {}
