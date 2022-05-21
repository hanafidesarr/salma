import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka7Page } from './angka7.page';

const routes: Routes = [
  {
    path: '',
    component: Angka7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka7PageRoutingModule {}
