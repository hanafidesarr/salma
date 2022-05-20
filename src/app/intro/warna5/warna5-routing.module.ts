import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna5Page } from './warna5.page';

const routes: Routes = [
  {
    path: '',
    component: Warna5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna5PageRoutingModule {}
