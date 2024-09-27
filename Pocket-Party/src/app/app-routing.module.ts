import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home',
    loadChildren: () => import('./presentation/home/home.module').then(m => m.HomeModule)
  },
  {path: 'login',
    loadChildren: () => import('./presentation/login/login.module').then(m => m.LoginModule)
  },
  {path: 'cadastro-cliente',
    loadChildren: () => import('./presentation/cadastro/cadastro-cliente/cadastro-cliente.module').then(m => m.CadastroClienteModule)
  },
  {path: 'cadastro-empresa',
    loadChildren: () => import('./presentation/cadastro/cadastro-empresa/cadastro-empresa.module').then(m => m.CadastroEmpresaModule)
  },
  {path: 'feed',
    loadChildren: () => import('./presentation/feed/feed.module').then(m => m.FeedModule)
  },
  {path: 'loja', 
    loadChildren: () => import('./presentation/loja/loja.module').then(m => m.LojaModule)
  },
  {path: 'edit-empresa',
    loadChildren: () => import('./presentation/cadastro/edit-empresa/edit-empresa.module').then(m => m.EditEmpresaModule)
  },
  {path: 'view-button',
    loadChildren: () => import('./presentation//view-button/view-button.module').then(m => m.ViewButtonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
