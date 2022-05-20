import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna9Page } from './warna9.page';

const routes: Routes = [
  {
    path: '',
    component: Warna9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna9PageRoutingModule {}
