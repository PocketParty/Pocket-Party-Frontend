import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.scss']
})
export class EditEmpresaComponent implements OnInit {

  fileName: string = 'Choose files';
  atuacaoSelected: string[] = []; // Array to store selected 'Atuação' options
  events: string[] = ['Aniversário', 'Formatura', 'Festa Infantil', 'Pool Party', 'Casamento', 'Noivado', 'Cerimônias Religiosas'];
  selectedEvents: string[] = []; // Array for selected event types

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {}


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

  // Toggle for events (this was already implemented)
  toggleSelection(event: string): void {
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
