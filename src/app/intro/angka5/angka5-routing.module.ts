import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka5Page } from './angka5.page';

const routes: Routes = [
  {
    path: '',
    component: Angka5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka5PageRoutingModule {}
