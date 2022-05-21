import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka2Page } from './angka2.page';

const routes: Routes = [
  {
    path: '',
    component: Angka2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka2PageRoutingModule {}
