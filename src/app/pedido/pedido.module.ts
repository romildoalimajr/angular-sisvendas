import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';



@NgModule({
  declarations: [
    PedidoFormComponent,
    PedidoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
