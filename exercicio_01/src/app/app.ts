import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagHeader } from "./tag-header/tag-header";
import { TagFooter } from "./tag-footer/tag-footer";
import { TagCompilacaoImgVideoSemanticas } from "./tag-compilacao-img-video-semanticas/tag-compilacao-img-video-semanticas";
import { NgIf } from '@angular/common';
import { TagListas } from "./tag-listas/tag-listas";
import { TagTabelas } from "./tag-tabelas/tag-tabelas";
import { TagLogin } from './tag-login/tag-login';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, TagHeader, TagFooter, TagCompilacaoImgVideoSemanticas, TagListas, TagTabelas, TagLogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio_01');
  
  secaoAtiva: string = 'tags';
  mostrar(secao: string) {
    this.secaoAtiva = secao;
}
}
