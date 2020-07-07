import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
  ],
  exports: [DashboardComponent, ProgressComponent, GraphicsComponent],
  imports: [PAGES_ROUTES, SharedModule],
})
export class PagesModule {}
