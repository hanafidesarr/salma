import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna1Page } from './warna1.page';

const routes: Routes = [
  {
    path: '',
    component: Warna1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna1PageRoutingModule {}
