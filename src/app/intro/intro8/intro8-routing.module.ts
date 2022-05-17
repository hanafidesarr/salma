import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Intro8Page } from './intro8.page';

const routes: Routes = [
  {
    path: '',
    component: Intro8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Intro8PageRoutingModule {}
