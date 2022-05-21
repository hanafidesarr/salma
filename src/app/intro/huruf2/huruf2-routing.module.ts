import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf2Page } from './huruf2.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf2PageRoutingModule {}
