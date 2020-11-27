import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTES } from "./app.routes";
import { CadastroComponent } from './cadastro/cadastro.component';
import { HeadComponent } from './head/head.component';
import { ListaDadosCadastroComponent } from './lista-dados-cadastro/lista-dados-cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaDadosCadastroComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
