import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RanPageRoutingModule } from './ran-routing.module';

import { RanPage } from './ran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RanPageRoutingModule
  ],
  declarations: [RanPage]
})
export class RanPageModule {}
