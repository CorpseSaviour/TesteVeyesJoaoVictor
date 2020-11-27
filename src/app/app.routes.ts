import { Routes } from "@angular/router"
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListaDadosCadastroComponent } from './lista-dados-cadastro/lista-dados-cadastro.component'

export const ROUTES: Routes = [
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'lista-dados-cadastro', component: ListaDadosCadastroComponent }
]