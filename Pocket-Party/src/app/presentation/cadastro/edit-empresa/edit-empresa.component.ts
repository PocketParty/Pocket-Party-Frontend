import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.scss']
})
export class EditEmpresaComponent implements OnInit {

  fileName: string = 'Pesquisar';
  atuacaoSelected: string[] = []; // Array to store selected 'Atuação' options
  events: string[] = ['Aniversário', 'Formatura', 'Festa Infantil', 'Pool Party', 'Casamento', 'Noivado', 'Cerimônias Religiosas'];
  selectedEvents: string[] = []; // Array for selected event types
  whatsappLink: string = '';
  facebookLink: string = '';
  instagramLink: string = '';
  descricao: string = '';
  empresaId!: string; // Armazena o ID da empresa

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
	private route: ActivatedRoute, // Injeta o serviço ActivatedRoute
	private router: Router,
    private http: HttpClient // Para fazer requisições HTTP
  ) {}

  ngOnInit(): void {
    // Captura o ID da empresa da URL, se necessário
    this.route.paramMap.subscribe(params => {
    this.empresaId = params.get('id') || ''; // Pega o ID da empresa na rota, se existir
    });
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

  // Handle Save Button
  onSave(): void {
	this.http.patch<any>(`http://localhost:3000/empresas/edit-empresa/${this.empresaId}`, {
	  atuacao: this.atuacaoSelected,
	  eventos: this.selectedEvents,
	  whatsappLink: (document.getElementById('whatsapp') as HTMLInputElement).value,
	  facebookLink: (document.getElementById('facebook') as HTMLInputElement).value,
	  instagramLink: (document.getElementById('instagram') as HTMLInputElement).value,
	  descricao: (document.getElementById('descricao') as HTMLInputElement).value,
	}).subscribe({
	  next: (response) => {
		console.log('Empresa atualizada com sucesso:', response);
		this.router.navigateByUrl('/login');
	  },
	  error: (error) => {
		console.error('Erro ao atualizar empresa:', error);
	  },
	  complete: () => {
		console.log('Request completed');
	  }
	});
  }
}
