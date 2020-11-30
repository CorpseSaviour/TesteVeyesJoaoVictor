import { Component, Directive, HostListener, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { HeadComponent } from './head.component';


describe('HeadComponent', () => {
  let component: HeadComponent;
  let fixture: ComponentFixture<HeadComponent>;
  let linkDes
  let routerLinks

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeadComponent,
        AppComponent,
        RouterLinkDirectiveStub
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'cadastro', component: CadastroComponentStub },
          { path: 'lista-dados-cadastro', component: ListaDadosCadastroComponentStub }
        ])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // trigger initial data binding
    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  //Verifica se o componente esta sendo criado com sucesso
  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  //Verifica se o botão Cadastro navega para a o componente Cadastro
  it('should have 2 routerlinks and they should be to "cadastro" and "lista-dados-cadastro"', () => {
    expect(routerLinks.length).toBe(2, 'should have 2 routerLinks');
    expect(routerLinks[0].linkParams).toBe('cadastro');
    expect(routerLinks[1].linkParams).toBe('lista-dados-cadastro');
  });

  //Verifica se existe um botão com o texto Cadastro
  it('should contain a "Cadastro" and a "Lista" buttons', () => {
    const buttonDes = fixture.debugElement.queryAll(By.css('button'));
    let nativeButton: HTMLButtonElement = buttonDes[0].nativeElement;
    expect(nativeButton.textContent).toBe('Cadastro');
    nativeButton = buttonDes[1].nativeElement;
    expect(nativeButton.textContent).toBe('Lista');
  })

  //Teste de navegação dos botões Lista e Cadastro
  it('should navigate to "/cadastro" and "/lista-dados-cadastro"', () => {
    //RouterLink e Button de Lista e Cadastro
    const cadastroLinkDe = linkDes[0];
    const cadastroLink = routerLinks[0];
    const listaDadosCadastroLinkDe = linkDes[1];
    const listaDadosCadastroLink = routerLinks[1];
    //simulação do click do botão Cadastro
    cadastroLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    //verifica se a navegação ocorreu com êxito
    expect(cadastroLink.navigatedTo).toBe('cadastro')
    //simulação do click do botão Lista
    cadastroLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    //verifica se a navegação ocorreu com êxito
    expect(cadastroLink.navigatedTo).toBe('cadastro')
  });
});

@Component({ template: '' }) class CadastroComponentStub { }

@Component({ template: '' }) class ListaDadosCadastroComponentStub { }

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}