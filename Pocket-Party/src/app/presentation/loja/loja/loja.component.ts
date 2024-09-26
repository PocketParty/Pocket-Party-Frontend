import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  items: { name: string, price: number, image: string }[] = [
    { name: 'Aniversário', price: 500, image: 'assets/logo.png' },
    { name: 'Casamento', price: 1500, image: 'assets/logo.png' },
    { name: 'Formatura', price: 1000, image: 'assets/logo.png' }
  ];

  // Texto digitado na barra de pesquisa
  searchText: string = '';

  // Método para filtrar os itens
  filteredItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

  }
}
