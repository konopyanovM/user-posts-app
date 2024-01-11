import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth.component').then(c => c.AuthComponent),
    canActivate: [noAuthGuard],
  },
  {
    path: '',
    loadComponent: () => import('./features/main/main.component').then(c => c.MainComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        loadComponent: () => import('./features/main/features/users-list/users-list.component').then(c => c.UsersListComponent),
      }],
  },
];
