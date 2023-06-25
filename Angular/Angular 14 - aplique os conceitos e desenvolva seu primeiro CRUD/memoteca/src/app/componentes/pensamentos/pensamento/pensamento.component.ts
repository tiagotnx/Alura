import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
    id: 0
  }

  larguraPensamento(): string {
    return this.pensamento.conteudo.length > 256 ? 'pensamento-g' : 'pensamento-p'
  }

}
