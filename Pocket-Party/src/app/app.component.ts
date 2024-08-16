import { Component } from '@angular/core';
import { MenuVisibilityService } from './shared/services/menu-visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pocket-Party';

  constructor(public menuVisibilityService: MenuVisibilityService) {}

}
