import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna6Page } from './warna6.page';

const routes: Routes = [
  {
    path: '',
    component: Warna6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna6PageRoutingModule {}
