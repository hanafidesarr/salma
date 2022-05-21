import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf8Page } from './huruf8.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf8PageRoutingModule {}
