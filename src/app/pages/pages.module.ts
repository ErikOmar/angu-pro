import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {SharedModule} from '../shared/shared.module';

// Rutas
import {PAGES_ROUTES} from './pages.routes';

// Componentes
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {GraphicsComponent} from './graphics/graphics.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';

// Componentes-Usuario
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {GraficaComponent} from '../components/grafica/grafica.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './promises/promises.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    AccountSettingsComponent,
    IncrementadorComponent,
    GraficaComponent,
    PromesasComponent,
    RxjsComponent,
    PromisesComponent,
  ],
  exports: [DashboardComponent, ProgressComponent, GraphicsComponent],
  imports: [PAGES_ROUTES, SharedModule, FormsModule, ChartsModule],
})
export class PagesModule {}
