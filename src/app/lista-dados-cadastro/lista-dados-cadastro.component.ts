import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-dados-cadastro',
  templateUrl: './lista-dados-cadastro.component.html',
  styleUrls: ['./lista-dados-cadastro.component.css']
})
export class ListaDadosCadastroComponent implements OnInit {

  public listaUsuarios: any
  public usuarioEditado: any = { name: '', cpf: '', phone: '', email: '' }
  public editando: boolean = false


  public edicao: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'cpf': new FormControl(this.usuarioEditado.cpf, [Validators.required, Validators.minLength(3)]),
    'phone': new FormControl(this.usuarioEditado.phone, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(this.usuarioEditado.email, [Validators.required, Validators.minLength(3)])
  })

  constructor() { }

  teste = "./assets/pencil.ico"

  ngOnInit(): void {
    this.updateLista()
  }

  public editar(input: any) {
    this.editando = true
    this.usuarioEditado = JSON.parse(input)
    let timer = this.timer().subscribe((response: any) => {
      if (response === 1){
        this.edicao.setValue({ name: this.usuarioEditado.name })        
      }
    })
  }

  public editarUsuario() {
    this.updateLista()
  }

  public updateLista() {
    this.listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'))
  }

  public timer(): Observable<any> {
    return interval(100)
  }
}

