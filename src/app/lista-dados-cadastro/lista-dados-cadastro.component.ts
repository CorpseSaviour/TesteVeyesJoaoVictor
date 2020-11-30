import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-dados-cadastro',
  templateUrl: './lista-dados-cadastro.component.html',
  styleUrls: ['./lista-dados-cadastro.component.css']
})
export class ListaDadosCadastroComponent implements OnInit, OnChanges {

  public listaUsuarios: Array<any> = new Array<any>()
  public usuarioEditado: any = { name: '', cpf: '', phone: '', email: '' }
  public editando: boolean = false
  public excluindo: boolean = false



  public edicao: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'cpf': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'phone': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(null, [Validators.required, Validators.minLength(3)])
  })

  constructor() { }

  pencilIcon = "./assets/pencil.ico"
  cancelIcon = "./assets/cancel.ico"
  trashIcon = "./assets/trash.ico"

  ngOnInit(): void {
    this.listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))
  }

  ngOnChanges(): void {

  }

  public exibirEditor(input: any) {
    this.usuarioEditado = input
    this.editando = true
  }

  public cancelarExcluir() {
    this.usuarioEditado = { name: '', cpf: '', phone: '', email: '' }
    this.excluindo = false
  }

  public exibirExcluir(input: any) {
    this.usuarioEditado = input
    this.excluindo = true
  }

  public editarUsuario() {
    for (var i = 0; i < this.listaUsuarios.length; i++) {
      if (this.listaUsuarios[i].name === this.usuarioEditado.name) {
        this.listaUsuarios[i] = this.edicao.value;
        break;
      }
    }
    this.updateLista()
    this.editando = false
  }

  public excluirUsuario() {
    for (var i = 0; i < this.listaUsuarios.length; i++) {
      if (this.listaUsuarios[i].name === this.usuarioEditado.name) {
        this.listaUsuarios.splice(i,1)
        break;
      }
    }
    this.updateLista()
    this.excluindo = false
  }

  public updateLista() {
      localStorage.setItem('listaUsuarios', JSON.stringify(this.listaUsuarios))
  }
}

