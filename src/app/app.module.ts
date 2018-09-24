import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModuleComponent } from './module/module.component';
import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ModuleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbCollapseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
