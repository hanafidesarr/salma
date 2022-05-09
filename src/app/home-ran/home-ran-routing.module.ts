import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRanPage } from './home-ran.page';

const routes: Routes = [
  {
    path: '',
    component: HomeRanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRanPageRoutingModule {}
