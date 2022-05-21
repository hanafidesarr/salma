import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka1Page } from './angka1.page';

const routes: Routes = [
  {
    path: '',
    component: Angka1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka1PageRoutingModule {}
