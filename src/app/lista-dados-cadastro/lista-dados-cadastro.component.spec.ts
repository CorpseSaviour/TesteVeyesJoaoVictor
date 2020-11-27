import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDadosCadastroComponent } from './lista-dados-cadastro.component';

describe('ListaDadosCadastroComponent', () => {
  let component: ListaDadosCadastroComponent;
  let fixture: ComponentFixture<ListaDadosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDadosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDadosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
