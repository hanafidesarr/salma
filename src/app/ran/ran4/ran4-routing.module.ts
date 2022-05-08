import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ran4Page } from './ran4.page';

const routes: Routes = [
  {
    path: '',
    component: Ran4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ran4PageRoutingModule {}
