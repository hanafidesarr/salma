import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna3Page } from './warna3.page';

const routes: Routes = [
  {
    path: '',
    component: Warna3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna3PageRoutingModule {}
