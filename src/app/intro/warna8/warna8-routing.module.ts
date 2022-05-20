import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna8Page } from './warna8.page';

const routes: Routes = [
  {
    path: '',
    component: Warna8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna8PageRoutingModule {}
