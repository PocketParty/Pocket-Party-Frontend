import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';
import { environment } from 'src/environments/environment';

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
	this.http.get<any>(`${environment.apiUrl}/empresas/pesquisar/todas`, {}).subscribe({
		next: (response) => {
			console.log('Empresas pesquisada com sucesso:', response);
			
			// Mapeia os dados da resposta para o formato desejado
			const mappedStores = response.map((empresa: any) => ({
				id: empresa.enterprise_id.toString(),
				name: empresa.name,
				descripition: empresa.descricao,
				type: 'STORE',
				image: 'https://auhekids.com.br/wp-content/uploads/2024/03/Desvendando-o-Codigo-da-Festa-Infantil-O-Segredo-do-Sucesso-1.jpg',
			}));
			
			// Envia os dados mapeados para o StoreService
			this.storeService.setStores(mappedStores);
			this.items = this.storeService.getStores();
		},
		error: (error) => {
			console.error('Erro ao pesquisar empresa:', error);
		},
		complete: () => {
			console.log('Request completed');
		}
	});
	
  }

  closeModal(event: Event) {
    // Verifica se o clique foi dentro do modal-content
    if ((event.target as Element).closest('.modal-content') === null) {
      this.showModal = false;
    }
  }

}
