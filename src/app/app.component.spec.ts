import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaDadosCadastroComponent } from './lista-dados-cadastro/lista-dados-cadastro.component';

describe('AppComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(ROUTES)
      ],
      declarations: [
        AppComponent,
        CadastroComponent,
        ListaDadosCadastroComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Teste Veyes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Teste Veyes');
  });

});
