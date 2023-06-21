import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item! : Item;
  @Output() emitindoItemParaEditar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnChanges(): void {}

  ngOnInit(): void {}

  editar(){
    this.emitindoItemParaEditar.emit(this.item)
  }

  checarItem() {
    this.item.comprado = !this.item.comprado
  }
}
