import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ran2Page } from './ran2.page';

const routes: Routes = [
  {
    path: '',
    component: Ran2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ran2PageRoutingModule {}
