import { Routes } from '@angular/router';
import { Forms } from './pages/forms/forms';
import { Welcome } from './pages/welcome/welcome';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'async-tables',
    loadComponent: () =>
      import('./pages/async-tables/async-tables').then((a) => a.AsyncTables),
  },
  {
    path: 'welcome',
    component: Welcome
  },
   {
    path: 'forms',
    component: Forms
  },

  {
    path: '**',
    loadComponent: () => import('./pages/welcome/welcome').then((c) => c.Welcome),
  },
];
