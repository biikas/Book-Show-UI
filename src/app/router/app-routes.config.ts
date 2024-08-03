import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { HomeCompnent } from '../pages/home/home.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { LoginComponent } from '../pages/login/login.component';
import { RiderRegisterComponent } from '../pages/rider-register/rider-register.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeCompnent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'rider-register', component: RiderRegisterComponent },
];
