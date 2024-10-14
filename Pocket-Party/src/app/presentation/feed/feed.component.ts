import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {

  constructor(private router : Router, private storeService: StoreService,private http: HttpClient) { }

  showModal = false;

  goToLoja(item: any){
    this.router.navigate(['/loja', item.id]);
  }


  items: any;

  ngOnInit(): void {
	this.http.get<any>(`http://localhost:3000/empresas/pesquisar/todas`, {}).subscribe({
		next: (response) => {
			console.log('Empresas pesquisada com sucesso:', response);
			
			// Mapeia os dados da resposta para o formato desejado
			const mappedStores = response.map((empresa: any) => ({
				id: empresa.id.toString(),
				name: empresa.nome,
				descripition: empresa.descricao,
				type: 'STORE',
				category: [true, false, true, false, true, true, true], // Exemplo, ajuste conforme necessário
				image: 'https://placekitten.com/300/200' // Adicione uma imagem padrão ou a partir da resposta
			}));
			
			// Envia os dados mapeados para o StoreService
			this.storeService.setStores(mappedStores);
		},
		error: (error) => {
			console.error('Erro ao pesquisar empresa:', error);
		},
		complete: () => {
			console.log('Request completed');
		}
	});
	this.items = this.storeService.getStores();
	
  }

  closeModal(event: Event) {
    // Verifica se o clique foi dentro do modal-content
    if ((event.target as Element).closest('.modal-content') === null) {
      this.showModal = false;
    }
  }

}
