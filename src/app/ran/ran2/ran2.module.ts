import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ran2PageRoutingModule } from './ran2-routing.module';

import { Ran2Page } from './ran2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ran2PageRoutingModule
  ],
  declarations: [Ran2Page]
})
export class Ran2PageModule {}
