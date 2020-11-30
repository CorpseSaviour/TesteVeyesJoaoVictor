import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ListaDadosCadastroComponent } from './lista-dados-cadastro.component';


describe('ListaDadosCadastroComponent', () => {
  let component: ListaDadosCadastroComponent;
  let fixture: ComponentFixture<ListaDadosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDadosCadastroComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDadosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // trigger initial data binding
  });
  //Teste de criação do componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Testes da lista
  it('should have a list', async() => {
    //Encontra os componentes lista e edicao
    let listaDes: DebugElement[] = fixture.debugElement.queryAll(By.css('div.lista'));
    let edicaoDes: DebugElement[] = fixture.debugElement.queryAll(By.css('div.edicao'));
    //Teste do label da lista
    let itensListaDes = listaDes[0].children;
    expect(itensListaDes.length).toBe(4, 'label of the list doesn\'t have 4 items')
    //Teste dos items da lista
    let nativeButton: HTMLButtonElement;
    let buttonDivDe: DebugElement;
    for (let index = 1; index < itensListaDes.length; index++) {
      //Verifica se todos os itens existentes na lista possuem 5 elementos
      expect(itensListaDes[index].childNodes.length).toBe(5, 'one or more itens of the list don\'t have all fields');
      //Verifica se o quinto elemento da lista é um botão      
      buttonDivDe = itensListaDes[index].query(By.css('button'));
      nativeButton = itensListaDes[index].children[4].query(By.css('button')).nativeNode;
      expect(nativeButton).not.toBeNull('one or more items of the list don\'t have a button');      
    }
  })
  @Component({ template: '' }) class ListaDadosCadastroComponentStub {

  }
});
