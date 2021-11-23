import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'mapcovid',
    loadChildren: () => import('./mapcovid/mapcovid.module').then( m => m.MapcovidPageModule)
  },
  {
    path: 'mapubs',
    loadChildren: () => import('./mapubs/mapubs.module').then( m => m.MapubsPageModule)
  },
  {
    path: 'chikung',
    loadChildren: () => import('./chikung/chikung.module').then( m => m.ChikungPageModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./covid/covid.module').then( m => m.CovidPageModule)
  },
  {
    path: 'dengue',
    loadChildren: () => import('./dengue/dengue.module').then( m => m.DenguePageModule)
  },
  {
    path: 'gripe',
    loadChildren: () => import('./gripe/gripe.module').then( m => m.GripePageModule)
  },
  {
    path: 'doenca',
    loadChildren: () => import('./doenca/doenca.module').then( m => m.DoencaPageModule)
  },
  {
    path: 'zika',
    loadChildren: () => import('./zika/zika.module').then( m => m.ZikaPageModule)
  },
  {
    path: 'criar-conta',
    loadChildren: () => import('./criar-conta/criar-conta.module').then( m => m.CriarContaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
