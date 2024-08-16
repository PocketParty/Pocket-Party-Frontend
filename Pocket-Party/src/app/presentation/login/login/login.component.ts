import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuVisibilityService } from 'src/app/shared/services/menu-visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private menuVisibilityService: MenuVisibilityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.menuVisibilityService.hideMenu();  // Hide menu on login component init
  }

  navigateToHome() {
    this.menuVisibilityService.showMenu();
    this.router.navigate(['/home']);
  }

}

