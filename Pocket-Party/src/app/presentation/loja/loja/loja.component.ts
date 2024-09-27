import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

  constructor() { }

  showModal = false;

  ngOnInit(): void {
  }

  business: {name: string, descripition: string, image: string, type: string } =
  {
    name: 'Loja de Fulano',
    descripition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
    type: 'STORE'
  };

  get profilePicture(){
    return this.business.image;
  }

  get name(){
    return this.business.name
  }

  get descipiton(){
    return this.business.descripition
  }

  get label(){
    return this.business.type == 'STORE' ? "Nossos Produtos" : "Nossos Serviços"
  }

  items: { name: string, price: number, image: string }[] = [
    { name: 'Aniversário', price: 500, image: 'assets/logo.png' },
    { name: 'Casamento', price: 1500, image: 'assets/logo.png' },
    { name: 'Formatura', price: 1000, image: 'assets/logo.png' },
    { name: '15 Anos', price: 1000, image: 'assets/logo.png' },
  ];

  // Texto digitado na barra de pesquisa
  searchText: string = '';

  // Método para filtrar os itens
  filteredItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

  }

  openModal() {
    this.showModal = true;
  }

  closeModal(event: Event) {
    // Verifica se o clique foi dentro do modal-content
    if ((event.target as Element).closest('.modal-content') === null) {
      this.showModal = false;
    }
  }
}
