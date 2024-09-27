import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {

  constructor(private router : Router, private storeService: StoreService) { }

  showModal = false;

  goToLoja(item: any){
    this.router.navigate(['/loja', item.id]);
  }


  items: any;

  ngOnInit(): void {
    this.items = this.storeService.getStores();
  }

  closeModal(event: Event) {
    // Verifica se o clique foi dentro do modal-content
    if ((event.target as Element).closest('.modal-content') === null) {
      this.showModal = false;
    }
  }

}
