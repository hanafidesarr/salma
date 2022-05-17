import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Intro7Page } from './intro7.page';

const routes: Routes = [
  {
    path: '',
    component: Intro7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Intro7PageRoutingModule {}
