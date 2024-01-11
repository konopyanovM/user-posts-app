import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth.component').then(c => c.AuthComponent),
  },
  {
    path: '',
    loadComponent: () => import('./features/main/main.component').then(c => c.MainComponent),
    canActivate: [authGuard],
  },
];
