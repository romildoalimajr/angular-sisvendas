import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';



@NgModule({
  declarations: [
    ProdutoFormComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
