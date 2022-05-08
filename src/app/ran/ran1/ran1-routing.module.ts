import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ran1Page } from './ran1.page';

const routes: Routes = [
  {
    path: '',
    component: Ran1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ran1PageRoutingModule {}
