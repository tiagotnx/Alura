import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  Pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  excluirPensamento(): void {
    if (this.Pensamento.id) {
      this.service.excluir(this.Pensamento.id).subscribe(() => {
        this.router.navigate(["/listarPensamento"]);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(["/listarPensamento"]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.buscarPorId(Number(id)).subscribe(pensamento => {
      this.Pensamento = pensamento;
    })
  }
}
