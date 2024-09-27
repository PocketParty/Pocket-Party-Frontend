import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';


@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private storeService: StoreService) {}

  showModal = false;
  showProductModal = false;
  product: any;

  id: string;
  storeData: any;
  items: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const storeIdParam = params.get('id');
      if (storeIdParam) {
        this.id = storeIdParam;
        this.storeData = this.storeService.getStoreById(this.id);
      } else {
        // Lidar com o caso em que storeId não é fornecido
        console.error('Store ID not found');
      }
    });

    this.items = this.storeData.products;
  }

  // Texto digitado na barra de pesquisa
  searchText: string = '';

  // Método para filtrar os itens
  filteredItems() {
    return this.items.filter((item: { name: string; }) =>
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

  closeProductModal(event: Event) {
    if ((event.target as Element).closest('.modal-content2') === null) {
      this.showProductModal = false;
    }
  }

  openProductModal(produto: any) {
    this.product= produto;
    console.log(produto)
    this.showProductModal = true;
  }


  get profilePicture(){
    return this.storeData.image;
  }

  get name(){
    return this.storeData.name
  }

  get descipiton(){
    return this.storeData.descripition
  }

  get label(){
    return this.storeData.type == 'STORE' ? "Nossos Produtos" : "Nossos Serviços"
  }

}
