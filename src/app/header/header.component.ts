import { Component } from '@angular/core';
import { routes } from '../app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  public isCollapsed = true;

}
