import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.scss']
})
export class CadastroModalComponent {

  constructor(private router: Router) { }

  client(){
    this.router.navigateByUrl('/cadastro-cliente');
  }

  company(){
    this.router.navigateByUrl('/cadastro-empresa');
  }

}
