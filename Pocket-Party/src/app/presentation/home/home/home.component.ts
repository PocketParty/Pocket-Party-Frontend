import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  client(){
    this.router.navigateByUrl('/feed');
  }

  company(){
    this.router.navigateByUrl('/cadastro-empresa');
  }

}
