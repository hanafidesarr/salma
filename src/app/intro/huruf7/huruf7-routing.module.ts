import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf7Page } from './huruf7.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf7PageRoutingModule {}
