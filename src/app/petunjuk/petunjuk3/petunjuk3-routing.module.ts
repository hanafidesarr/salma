import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Petunjuk3Page } from './petunjuk3.page';

const routes: Routes = [
  {
    path: '',
    component: Petunjuk3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Petunjuk3PageRoutingModule {}
