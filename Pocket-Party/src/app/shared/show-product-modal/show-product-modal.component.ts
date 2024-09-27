import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-product-modal',
  templateUrl: './show-product-modal.component.html',
  styleUrls: ['./show-product-modal.component.scss']
})
export class ShowProductModalComponent implements OnInit {

  constructor() { }

  @Input()
  data: any;

  ngOnInit(): void {
  }

  get value(){
    return this.data.preco != "" ? "R$ " + this.data.preco : ""
  }

}
