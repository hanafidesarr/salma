import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka6Page } from './angka6.page';

const routes: Routes = [
  {
    path: '',
    component: Angka6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka6PageRoutingModule {}
