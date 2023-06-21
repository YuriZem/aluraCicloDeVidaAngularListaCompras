import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra(): Array<Item>{
    return this.listaDeCompra;
  }

  criarItem(nomeItem:string){
    const id = this.listaDeCompra.length + 1;
    const item :Item = {
      id : id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item
  }
  adicionarItemNaLista(nomeItem:string){
    const item = this. criarItem(nomeItem)
    this.listaDeCompra.push(item)
  }

  editarItemNaLista( itemAntigo: Item, nomeEditadoDoItem:string){
    const itemEditado : Item = {
      id : itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado : itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado)
  }

  atualizarLocalStorage(){
    localStorage.setItem('itens',JSON.stringify(this.listaDeCompra))
  }
}
