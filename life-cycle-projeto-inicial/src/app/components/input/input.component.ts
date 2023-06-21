import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar Item';
  valorItem!: string;

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar Item'
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
    console.log(changes['itemQueVaiSerEditado'].currentValue)
  }

  ngOnInit(): void { }

  adicionarItem(){
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem)
    this.limparCampo()
  }

  limparCampo(){
    this.valorItem = ''
  }

  editarItem(){
    this.listaDeCompraService.editarItemNaLista(this.itemQueVaiSerEditado, this.valorItem)
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar Item'
  }


}
