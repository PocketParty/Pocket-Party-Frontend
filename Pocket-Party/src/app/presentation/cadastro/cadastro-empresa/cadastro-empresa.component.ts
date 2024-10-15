import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    this.http.post<any>(`${environment.apiUrl}/empresas/adicionar`, {
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
		  const empresaId = response.id;
		  this.router.navigateByUrl(`/edit-empresa/${empresaId}`);
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
