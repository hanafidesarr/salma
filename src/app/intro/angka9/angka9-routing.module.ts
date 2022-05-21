import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka9Page } from './angka9.page';

const routes: Routes = [
  {
    path: '',
    component: Angka9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka9PageRoutingModule {}
