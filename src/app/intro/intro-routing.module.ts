import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPage } from './intro.page';

const routes: Routes = [
  {
    path: '',
    component: IntroPage
  },
  {
    path: 'intro1',
    loadChildren: () => import('./intro1/intro1.module').then( m => m.Intro1PageModule)
  },
  {
    path: 'intro2',
    loadChildren: () => import('./intro2/intro2.module').then( m => m.Intro2PageModule)
  },
  {
    path: 'intro3',
    loadChildren: () => import('./intro3/intro3.module').then( m => m.Intro3PageModule)
  },
  {
    path: 'intro4',
    loadChildren: () => import('./intro4/intro4.module').then( m => m.Intro4PageModule)
  },
  {
    path: 'intro5',
    loadChildren: () => import('./intro5/intro5.module').then( m => m.Intro5PageModule)
  },
  {
    path: 'intro6',
    loadChildren: () => import('./intro6/intro6.module').then( m => m.Intro6PageModule)
  },
  {
    path: 'intro7',
    loadChildren: () => import('./intro7/intro7.module').then( m => m.Intro7PageModule)
  },
  {
    path: 'intro8',
    loadChildren: () => import('./intro8/intro8.module').then( m => m.Intro8PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroPageRoutingModule {}
