import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {

  constructor() { }

  showModal = false;

  items = ['Empresa Festas LTDA', 'Empresa Festas LTDA', 'Empresa Festas LTDA', 'Empresa Festas LTDA', 'Empresa Festas LTDA']

  ngOnInit(): void {
  }

  product: {name: string, descripition: string, image: string, preco: string};

  openModal(produto: any) {
    this.product = {
      name: 'Loja de Fulano',
      descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
      preco: '10'
    }
    this.showModal = true;
  }

  closeModal(event: Event) {
    // Verifica se o clique foi dentro do modal-content
    if ((event.target as Element).closest('.modal-content') === null) {
      this.showModal = false;
    }
  }

}
