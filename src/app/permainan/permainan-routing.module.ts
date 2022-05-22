import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermainanPage } from './permainan.page';

const routes: Routes = [
  {
    path: '',
    component: PermainanPage
  },
  {
    path: 'petunjuk',
    loadChildren: () => import('./petunjuk/petunjuk.module').then( m => m.PetunjukPageModule)
  },
  {
    path: 'level1',
    loadChildren: () => import('./level1/level1.module').then( m => m.Level1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermainanPageRoutingModule {}
