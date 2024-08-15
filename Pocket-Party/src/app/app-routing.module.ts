import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {path: 'cadastro-cliente',
    loadChildren: () => import('./cadastro/cadastro-cliente/cadastro-cliente.module').then(m => m.CadastroClienteModule)
  },
  {path: 'cadastro-empresa',
    loadChildren: () => import('./cadastro/cadastro-empresa/cadastro-empresa.module').then(m => m.CadastroEmpresaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
