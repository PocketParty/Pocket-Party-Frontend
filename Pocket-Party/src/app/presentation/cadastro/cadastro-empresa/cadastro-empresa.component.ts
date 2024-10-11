import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent implements OnInit {

  constructor(
    private router: Router,
	private http: HttpClient
  ) {}

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  edit(){
    this.http.post('http://localhost:3000/empresas/adicionar', {
      nome: (document.getElementById('nome') as HTMLInputElement).value,
      cnpj: (document.getElementById('cnpj') as HTMLInputElement).value,
      telefone: (document.getElementById('telefone') as HTMLInputElement).value,
      cep: (document.getElementById('cep') as HTMLInputElement).value,
      endereco: (document.getElementById('endereco') as HTMLInputElement).value,
      username: (document.getElementById('username') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      senha: (document.getElementById('senha') as HTMLInputElement).value,
    }).subscribe({
		next: (response) => {
		  console.log(response);
		  this.router.navigateByUrl('/edit-empresa');
		},
		error: (error) => {
		  console.error(error);
		},
		complete: () => {
		  console.log('Request completed');
		}
	  });
  }

}
