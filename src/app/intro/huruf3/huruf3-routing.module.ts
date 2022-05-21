import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Huruf3Page } from './huruf3.page';

const routes: Routes = [
  {
    path: '',
    component: Huruf3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Huruf3PageRoutingModule {}
