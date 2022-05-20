import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna4Page } from './warna4.page';

const routes: Routes = [
  {
    path: '',
    component: Warna4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna4PageRoutingModule {}
