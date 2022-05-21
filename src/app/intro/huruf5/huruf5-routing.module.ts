import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf5Page } from './huruf5.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf5PageRoutingModule {}
