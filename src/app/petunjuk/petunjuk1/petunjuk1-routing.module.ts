import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Petunjuk1Page } from './petunjuk1.page';

const routes: Routes = [
  {
    path: '',
    component: Petunjuk1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Petunjuk1PageRoutingModule {}
