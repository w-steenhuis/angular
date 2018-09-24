import { Component } from '@angular/core';
import { routes } from '../app.routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  _navItems: { title: string; path: string, icon: string }[] = [];

  constructor() {
    this._navItems = routes.filter(r => r.data).map(r => ({
      title: r.data.title,
      icon: r.data.icon,
      path: r.path
    }));
  }

}
