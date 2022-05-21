import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka8Page } from './angka8.page';

const routes: Routes = [
  {
    path: '',
    component: Angka8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka8PageRoutingModule {}
