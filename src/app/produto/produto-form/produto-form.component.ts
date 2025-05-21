import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../../../models/produto.model';
import { ProdutoService } from '../../../services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-form',
  standalone: false,
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent implements OnInit{

  model: ProdutoModel = {};
  status: string = "";

  /**
   *
   */
  constructor(private produtoService: ProdutoService,
    private activedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe({
      next: parameters => {
        let id = Number(parameters.get('id'))
        this.obterModel(id);
      }
    })
  }

  obterModel(id: number){
    if(id > 0){
      let resposta = this.produtoService.retornarPorId(id);

      resposta.subscribe({
        next: value => this.model = value,
        error: err => alert(err)
      })
    }
  }

  salvar(){
    let id = Number(this.model.id);
    let resposta : Observable<ProdutoModel>;

    this.status = "Processando ...";

    if(id > 0){
      //atualizar
      resposta = this.produtoService.atualizar(id, this.model);
    }else{
      //incluir
      resposta = this.produtoService.adicionar(this.model);
    }

    resposta.subscribe({
      next: value => {
        this.obterModel(Number(value.id));
        this.status = "Salvo com sucesso";
        setTimeout(() => this.status = "", 5000);
      },
      error: err => alert(err)
    });
  }

}
