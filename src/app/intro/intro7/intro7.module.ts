import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro7PageRoutingModule } from './intro7-routing.module';

import { Intro7Page } from './intro7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro7PageRoutingModule
  ],
  declarations: [Intro7Page]
})
export class Intro7PageModule {}
