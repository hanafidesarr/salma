import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Intro10Page } from './intro10.page';

const routes: Routes = [
  {
    path: '',
    component: Intro10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Intro10PageRoutingModule {}
