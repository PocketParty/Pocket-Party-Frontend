import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuVisibilityService } from 'src/app/shared/services/menu-visibility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private menuVisibilityService: MenuVisibilityService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

}

