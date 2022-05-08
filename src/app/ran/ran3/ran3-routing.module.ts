import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ran3Page } from './ran3.page';

const routes: Routes = [
  {
    path: '',
    component: Ran3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ran3PageRoutingModule {}
