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
	) { }

	ngOnInit() {
	}

	navigateToHome() {
		this.router.navigateByUrl('/home');
	}

	edit() {
		this.http.post<any>(`${environment.apiUrl}/empresas/adicionar`, {
			name: (document.getElementById('nome') as HTMLInputElement).value,
			cnpj: (document.getElementById('cnpj') as HTMLInputElement).value,
			username: (document.getElementById('username') as HTMLInputElement).value,
			password_hash: (document.getElementById('senha') as HTMLInputElement).value,
		}).subscribe({
			next: (response) => {
				const empresaId = response.enterprise_id;
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
