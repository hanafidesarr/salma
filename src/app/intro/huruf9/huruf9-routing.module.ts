import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf9Page } from './huruf9.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf9PageRoutingModule {}
