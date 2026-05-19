import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-header',
  imports: [],
  templateUrl: './tag-header.html',
  styleUrl: './tag-header.css',
})
export class TagHeader {
  
  @Output() secaoSelecionada = new EventEmitter<string>();
  selecionar(secao: string) {
    this.secaoSelecionada.emit(secao);
  }
}
