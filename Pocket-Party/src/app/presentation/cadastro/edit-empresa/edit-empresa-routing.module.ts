import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpresaComponent } from './edit-empresa.component';

const routes: Routes = [
  {path: '', component: EditEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditEmpresaRoutingModule { }
