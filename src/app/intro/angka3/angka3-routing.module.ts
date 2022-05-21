import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angka3Page } from './angka3.page';

const routes: Routes = [
  {
    path: '',
    component: Angka3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Angka3PageRoutingModule {}
