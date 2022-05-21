import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Angka3PageRoutingModule } from './angka3-routing.module';

import { Angka3Page } from './angka3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Angka3PageRoutingModule
  ],
  declarations: [Angka3Page]
})
export class Angka3PageModule {}
