import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetunjukPageRoutingModule } from './petunjuk-routing.module';

import { PetunjukPage } from './petunjuk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetunjukPageRoutingModule
  ],
  declarations: [PetunjukPage]
})
export class PetunjukPageModule {}
