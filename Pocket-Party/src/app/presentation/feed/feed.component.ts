import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit {

  constructor() { }

  items = ['Empresa Festas LTDA', 'Empresa Festas LTDA', 'Empresa Festas LTDA', 'Empresa Festas LTDA', 'Empresa Festas LTDA']

  ngOnInit(): void {
  }

}
