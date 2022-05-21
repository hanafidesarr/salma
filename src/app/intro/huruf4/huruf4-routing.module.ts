import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf4Page } from './huruf4.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf4PageRoutingModule {}
