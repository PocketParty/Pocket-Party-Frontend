import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuVisibilityService } from 'src/app/shared/services/menu-visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private menuVisibilityService: MenuVisibilityService) {}

  ngOnInit() {
    this.menuVisibilityService.hideMenu();  // Hide menu on login component init
  }

}
export { MenuVisibilityService };

