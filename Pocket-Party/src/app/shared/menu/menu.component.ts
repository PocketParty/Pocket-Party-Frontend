import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  constructor(private router: Router) {}

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal(event: Event) {
    // Verifica se o clique foi dentro do modal-content
    if ((event.target as Element).closest('.modal-content') === null) {
      this.showModal = false;
    }
  }

  signed(){
    return this.router.url.includes('home');
  }

  getHome(){
    if (this.router.url.includes('home')){
      this.router.navigateByUrl('/home');
    } else{
      this.router.navigateByUrl('/feed');
    }
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

}
