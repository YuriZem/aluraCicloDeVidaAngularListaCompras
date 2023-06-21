import { Item } from '../app/interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>;
  itemParaSerEditado!: Item;
  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }
  ngOnInit(): void {
    this.listaDeCompra = this.listaDeCompraService.getListaDeCompra()
  }
  editar(item: Item){
    this.itemParaSerEditado = item;

  }
}
