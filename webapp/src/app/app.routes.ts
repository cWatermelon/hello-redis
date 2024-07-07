import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'login',
    loadComponent: () => import('~/app/login/login.component').then((c) => c.default),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('~/app/about/about.component').then((c) => c.default),
  },
  {
    path: 'about',
    loadComponent: () => import('~/app/about/about.component').then((c) => c.default),
  },
];
