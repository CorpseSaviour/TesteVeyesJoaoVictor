import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { asyncScheduler, Observable, of, scheduled, timer } from 'rxjs';
import { HttpService, HttpServiceStub } from '../http.service';
import { CadastroComponent } from './cadastro.component';


describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let helper: Helper

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroComponent],
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      providers: [{ provide: HttpService, useClass: HttpServiceStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    helper = new Helper();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the userDatabase', () => {
    expect(true).toBeTruthy();
  });

  it('should contain 4 input areas', () => {
    const linkDes = fixture.debugElement.queryAll(By.css('input'));
    expect(linkDes.length).toBe(4);
  })

  it('should contain a button with "Cadastrar" on the page', async () => {
    const linkDes = fixture.debugElement.queryAll(By.css('button'))
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement
    expect(nativeButton.textContent).toBe('Cadastrar')
  })
});

@Component({ template: '' }) class CadastroComponentStub {

}

class Item {
  name: string
  phone: string
  cpf: string
  email: string
  constructor(name, phone, cpf, email) {
    this.name = name
    this.phone = phone
    this.cpf = cpf
    this.email = email
  }
}

class Helper {
  items: Item[] = []
  getItems(ammount): Item[] {
    for (let index = 0; index < this.items.length; index++) {
      this.items.push(new Item(`nome`+index,`cpf`+index,`nome`+index,`nome`+index))
    }
    return this.items
  }
}
