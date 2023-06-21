import { Item } from '../app/interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>;
  itemParaSerEditado!: Item;
  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }
  ngOnInit(): void {
    this.listaDeCompra = this.listaDeCompraService.getListaDeCompra()
  }

  ngDoCheck(): void {
    this.listaDeCompraService.atualizarLocalStorage()
  }

  editar(item: Item){
    this.itemParaSerEditado = item;
  }
  deletarItem(id : number){
    const i = this.listaDeCompra.findIndex((item) => item.id === id)
    this.listaDeCompra.splice(i,1)
  }
}
