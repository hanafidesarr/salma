import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermainanPageRoutingModule } from './permainan-routing.module';

import { PermainanPage } from './permainan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermainanPageRoutingModule
  ],
  declarations: [PermainanPage]
})
export class PermainanPageModule {}
