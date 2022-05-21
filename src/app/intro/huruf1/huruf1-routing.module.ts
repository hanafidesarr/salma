import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf1Page } from './huruf1.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf1PageRoutingModule {}
