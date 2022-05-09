import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeRanPageRoutingModule } from './home-ran-routing.module';

import { HomeRanPage } from './home-ran.page';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRanPageRoutingModule
  ],
  providers: [
    ScreenOrientation
  ],
  declarations: [HomeRanPage]
})
export class HomeRanPageModule {}
