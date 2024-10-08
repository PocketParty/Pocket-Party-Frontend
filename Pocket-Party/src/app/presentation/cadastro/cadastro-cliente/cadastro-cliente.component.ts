import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}
