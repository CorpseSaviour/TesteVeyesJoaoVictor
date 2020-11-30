import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [HttpService]
})
export class CadastroComponent implements OnInit {

  public carregando = false

  public teste: JSON

  public cadastro: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'cpf': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'phone': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(null, [Validators.required, Validators.minLength(3)])
  })

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
    /**
     * VERIFICAR SE JA EXISTE UMA LISTA DE USUÁRIOS EM LOCAL STORAGE
     * 
     * CASO CONTRARIO, EXECUTAR REQUISIÇÃO HTTP GET PARA INICIAR A LISTA
    */
    if (localStorage.getItem('listaUsuarios') === null) {
      this.http.get('https://private-21e8de-rafaellucio.apiary-mock.com/users').subscribe((response: any) => {
        localStorage.setItem('listaUsuarios', JSON.stringify(response))
      })
    }
  }

  public cadastrarUsuario() {
    this.carregando = true;
    let s = this.timer().subscribe((response: any) => {
      if (response === 1) {
        let currentList = JSON.parse(localStorage.getItem('listaUsuarios'))
        currentList.push(JSON.parse(JSON.stringify(this.cadastro.value)))
        localStorage.setItem('listaUsuarios', JSON.stringify(currentList))
        this.carregando = false
        this.cadastro.reset()
        s.unsubscribe()
      }
    })
  }

  public timer(): Observable<any> {
    return interval(3000)
  }

}
