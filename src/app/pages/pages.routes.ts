import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {GraphicsComponent} from './graphics/graphics.component';
import {RouterModule, Routes} from '@angular/router';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {PromisesComponent} from './promises/promises.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'}},
      {path: 'graphics', component: GraphicsComponent, data: {titulo: 'Graficas'}},
      {path: 'promesas', component: PromisesComponent, data: {titulo: 'Promesas'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes del Tema'}},
      {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'}},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ],
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
