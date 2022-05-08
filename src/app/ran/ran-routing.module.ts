import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RanPage } from './ran.page';

const routes: Routes = [
  {
    path: '',
    component: RanPage
  },
  {
    path: 'ran1',
    loadChildren: () => import('./ran1/ran1.module').then( m => m.Ran1PageModule)
  },
  {
    path: 'ran2',
    loadChildren: () => import('./ran2/ran2.module').then( m => m.Ran2PageModule)
  },
  {
    path: 'ran3',
    loadChildren: () => import('./ran3/ran3.module').then( m => m.Ran3PageModule)
  },
  {
    path: 'ran4',
    loadChildren: () => import('./ran4/ran4.module').then( m => m.Ran4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RanPageRoutingModule {}
