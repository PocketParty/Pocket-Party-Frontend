import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';  // Importação necessária para o ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home/home.component';
import { LoginComponent } from './presentation/login/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CadastroClienteComponent } from './presentation/cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './presentation/cadastro/cadastro-empresa/cadastro-empresa.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './presentation/feed/feed.component';
import { CadastroModalComponent } from './shared/cadastro-modal/cadastro-modal.component';
import { LojaComponent } from './presentation/loja/loja/loja.component';
import { EditEmpresaComponent } from './presentation/cadastro/edit-empresa/edit-empresa.component';
import { ProductModalComponent } from './shared/product-modal/product-modal.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ShowProductModalComponent } from './shared/show-product-modal/show-product-modal.component';
import { ViewButtonComponent } from './presentation/view-button/view-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    CadastroClienteComponent,
    CadastroEmpresaComponent,
    FeedComponent,
    CadastroModalComponent,
    LojaComponent,
    EditEmpresaComponent,
    ProductModalComponent,
    ShowProductModalComponent,
    ViewButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
