import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka4Page } from './angka4.page';

const routes: Routes = [
  {
    path: '',
    component: Angka4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka4PageRoutingModule {}
