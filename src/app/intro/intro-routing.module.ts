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
  },
  {
    path: 'intro9',
    loadChildren: () => import('./intro9/intro9.module').then( m => m.Intro9PageModule)
  },
  {
    path: 'intro10',
    loadChildren: () => import('./intro10/intro10.module').then( m => m.Intro10PageModule)
  },
  {
    path: 'warna',
    loadChildren: () => import('./warna/warna.module').then( m => m.WarnaPageModule)
  },
  {
    path: 'warna1',
    loadChildren: () => import('./warna1/warna1.module').then( m => m.Warna1PageModule)
  },
  {
    path: 'warna2',
    loadChildren: () => import('./warna2/warna2.module').then( m => m.Warna2PageModule)
  },
  {
    path: 'warna3',
    loadChildren: () => import('./warna3/warna3.module').then( m => m.Warna3PageModule)
  },
  {
    path: 'warna4',
    loadChildren: () => import('./warna4/warna4.module').then( m => m.Warna4PageModule)
  },
  {
    path: 'warna5',
    loadChildren: () => import('./warna5/warna5.module').then( m => m.Warna5PageModule)
  },
  {
    path: 'warna6',
    loadChildren: () => import('./warna6/warna6.module').then( m => m.Warna6PageModule)
  },
  {
    path: 'warna7',
    loadChildren: () => import('./warna7/warna7.module').then( m => m.Warna7PageModule)
  },
  {
    path: 'warna8',
    loadChildren: () => import('./warna8/warna8.module').then( m => m.Warna8PageModule)
  },
  {
    path: 'warna9',
    loadChildren: () => import('./warna9/warna9.module').then( m => m.Warna9PageModule)
  },
  {
    path: 'angka',
    loadChildren: () => import('./angka/angka.module').then( m => m.AngkaPageModule)
  },
  {
    path: 'angka1',
    loadChildren: () => import('./angka1/angka1.module').then( m => m.Angka1PageModule)
  },
  {
    path: 'angka2',
    loadChildren: () => import('./angka2/angka2.module').then( m => m.Angka2PageModule)
  },
  {
    path: 'angka3',
    loadChildren: () => import('./angka3/angka3.module').then( m => m.Angka3PageModule)
  },
  {
    path: 'angka4',
    loadChildren: () => import('./angka4/angka4.module').then( m => m.Angka4PageModule)
  },
  {
    path: 'angka5',
    loadChildren: () => import('./angka5/angka5.module').then( m => m.Angka5PageModule)
  },
  {
    path: 'angka6',
    loadChildren: () => import('./angka6/angka6.module').then( m => m.Angka6PageModule)
  },
  {
    path: 'angka7',
    loadChildren: () => import('./angka7/angka7.module').then( m => m.Angka7PageModule)
  },
  {
    path: 'angka8',
    loadChildren: () => import('./angka8/angka8.module').then( m => m.Angka8PageModule)
  },
  {
    path: 'angka9',
    loadChildren: () => import('./angka9/angka9.module').then( m => m.Angka9PageModule)
  },
  {
    path: 'huruf',
    loadChildren: () => import('./huruf/huruf.module').then( m => m.HurufPageModule)
  },
  {
    path: 'huruf1',
    loadChildren: () => import('./huruf1/huruf1.module').then( m => m.Huruf1PageModule)
  },
  {
    path: 'huruf2',
    loadChildren: () => import('./huruf2/huruf2.module').then( m => m.Huruf2PageModule)
  },
  {
    path: 'huruf3',
    loadChildren: () => import('./huruf3/huruf3.module').then( m => m.Huruf3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroPageRoutingModule {}
