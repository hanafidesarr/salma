import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroPage } from './intro/intro.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-ran',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'ran',
    loadChildren: () => import('./ran/ran.module').then( m => m.RanPageModule)
  },
  {
    path: 'petunjuk',
    loadChildren: () => import('./petunjuk/petunjuk.module').then( m => m.PetunjukPageModule)
  },
  {
    path: 'home-ran',
    loadChildren: () => import('./home-ran/home-ran.module').then( m => m.HomeRanPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
