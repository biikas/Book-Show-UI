import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/login/login.component').then(module => module.LoginComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('../pages/login/login.component').then(module => module.LoginComponent),
    },
    {
        path: 'register',
        loadComponent: () => import('../pages/register/register-user.component').then(module => module.RegisterUserComponent),
    },
]