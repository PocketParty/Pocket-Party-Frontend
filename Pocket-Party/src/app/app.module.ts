import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home/home.component';
import { LoginComponent } from './presentation/login/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CadastroClienteComponent } from './presentation/cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './presentation/cadastro/cadastro-empresa/cadastro-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    CadastroClienteComponent,
    CadastroEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
