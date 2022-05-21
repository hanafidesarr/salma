import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf6Page } from './huruf6.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf6PageRoutingModule {}
