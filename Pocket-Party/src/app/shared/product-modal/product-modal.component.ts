import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {

  fileName: string = 'Selecione a foto';

  atuacaoSelected: string[] = []; // Array to store selected 'Atuação' options
  events: string[] = ['Aniversário', 'Formatura', 'Festa Infantil', 'Pool Party', 'Casamento', 'Noivado', 'Cerimônias Religiosas'];
  selectedEvents: string[] = [];

  constructor() { }

  @ViewChild('fileInput') fileInput!: ElementRef;

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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = 'Choose files';
    }
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }
   // Evento chamado a cada entrada de texto
   onTextInput() {
  }

  toggleSelectionEvent(event: string): void {
    const index = this.selectedEvents.indexOf(event);
    if (index === -1) {
      this.selectedEvents.push(event);
    } else {
      this.selectedEvents.splice(index, 1);
    }
  }

  // Toggle for Atuação (Serviço/Empresa)
  toggleAtuacao(option: string): void {
    const index = this.atuacaoSelected.indexOf(option);
    if (index === -1) {
      this.atuacaoSelected.push(option);
    } else {
      this.atuacaoSelected.splice(index, 1);
    }
  }

}
