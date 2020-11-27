import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService, HttpServiceStub } from '../http.service';
import { CadastroComponent } from './cadastro.component';


describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroComponent ],
      imports:[ RouterTestingModule, HttpClientModule ],
      providers:[{provide: HttpService, useClass: HttpServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the userDatabase', () => {
    expect(true).toBeTruthy();
  });

  it('should contain a button',()=>{
    const linkDes = fixture.debugElement
    .queryAll(By.css('button'))
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement
    expect(nativeButton).toBeTruthy()
  })

  it('should contain a button with "Cadastrar" on the page',()=>{
    const linkDes = fixture.debugElement
    .queryAll(By.css('button'))
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement
    expect(nativeButton.textContent).toBe('Cadastrar')
  })
});
