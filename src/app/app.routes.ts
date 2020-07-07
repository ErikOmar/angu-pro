import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Error404Component } from './shared/error404/error404.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Error404Component },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
