import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna2Page } from './warna2.page';

const routes: Routes = [
  {
    path: '',
    component: Warna2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna2PageRoutingModule {}
