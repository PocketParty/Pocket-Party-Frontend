import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojaComponent } from './loja/loja.component';

const routes: Routes = [
  {path: '', component:LojaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LojaRoutingModule { }
