import { Route, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModuleComponent } from './module/module.component';

const ROOT: Route = {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
};

const DASHBOARD: Route = {
  path: 'dashboard',
  component: DashboardComponent,
  data: { title: 'Dashboard', icon: 'fa fa-home' }
};

const MODULE: Route = {
  path: 'module',
  component: ModuleComponent,
  data: { title: 'Module', icon: 'fa fa-car' }
};
const MODULE2: Route = {
  path: 'module2',
  redirectTo: 'module',
  data: { title: 'Chrome', icon: 'fa fa-chrome' }
};
const MODULE3: Route = {
  path: 'module3',
  redirectTo: 'module',
  data: { title: 'Edge', icon: 'fa fa-edge' }
};
const MODULE4: Route = {
  path: 'module4',
  redirectTo: 'module',
  data: { title: 'Windows', icon: 'fa fa-windows' }
};
const MODULE5: Route = {
  path: 'module5',
  redirectTo: 'module',
  data: { title: 'Linux', icon: 'fa fa-linux' }
};

export const routes: Routes = [ ROOT, DASHBOARD, MODULE, MODULE2, MODULE3, MODULE4, MODULE5 ];
