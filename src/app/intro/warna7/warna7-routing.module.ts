import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Warna7Page } from './warna7.page';

const routes: Routes = [
  {
    path: '',
    component: Warna7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Warna7PageRoutingModule {}
