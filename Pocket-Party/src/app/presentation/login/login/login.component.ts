import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private router: Router,
	private http: HttpClient
  ) {}

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  submit() {
    this.http.post<any>('http://localhost:3000/auth/login/empresa', {
      email: (document.getElementById('email') as HTMLInputElement).value,
      senha: (document.getElementById('senha') as HTMLInputElement).value,
    }).subscribe({
      next: (response) => {
        const token = response;
        localStorage.setItem('token', token);
        this.router.navigateByUrl('/feed');
      },
      error: (error) => {
        console.error('Erro ao fazer login', error);
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }

}

