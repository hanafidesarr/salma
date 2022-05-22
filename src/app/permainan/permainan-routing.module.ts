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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermainanPageRoutingModule {}
