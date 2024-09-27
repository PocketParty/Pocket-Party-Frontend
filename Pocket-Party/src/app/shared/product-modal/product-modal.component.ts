import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {

  constructor() { }

  isRent: boolean = true;

  toggleSelection() {
    this.isRent = !this.isRent;
  }

  selectRent() {
    this.isRent = false;
  }

  selectSale() {
    this.isRent = true;
  }

  ngOnInit(): void {
  }


   // Evento chamado a cada entrada de texto
   onTextInput() {
  }

}
