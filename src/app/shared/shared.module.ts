import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {Error404Component} from './error404/error404.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    Error404Component,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    Error404Component,
  ],
})
export class SharedModule {}
