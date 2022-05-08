import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetunjukPage } from './petunjuk.page';

const routes: Routes = [
  {
    path: '',
    component: PetunjukPage
  },
  {
    path: 'petunjuk1',
    loadChildren: () => import('./petunjuk1/petunjuk1.module').then( m => m.Petunjuk1PageModule)
  },
  {
    path: 'petunjuk2',
    loadChildren: () => import('./petunjuk2/petunjuk2.module').then( m => m.Petunjuk2PageModule)
  },
  {
    path: 'petunjuk3',
    loadChildren: () => import('./petunjuk3/petunjuk3.module').then( m => m.Petunjuk3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetunjukPageRoutingModule {}
