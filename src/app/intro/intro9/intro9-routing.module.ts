import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Intro9Page } from './intro9.page';

const routes: Routes = [
  {
    path: '',
    component: Intro9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Intro9PageRoutingModule {}
