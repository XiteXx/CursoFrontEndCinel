import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsH } from "./tags-h/tags-h";
import { TagParagrafo } from "./tag-paragrafo/tag-paragrafo";
import { TagListas } from "./tag-listas/tag-listas";
import { TagLinks } from "./tag-links/tag-links";
import { TagsImg } from './tags-img/tags-img';
import { TagsSemanticas } from './tags-semanticas/tags-semanticas';
import { TagsVideo } from './tags-video/tags-video';
import { TabelasEstaticas } from "./tabelas-estaticas/tabelas-estaticas";
import { TabelasEstaticas2 } from "./tabelas-estaticas-2/tabelas-estaticas-2";
import { FormularioEstatico } from "./formulario-estatico/formulario-estatico";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsH, TagParagrafo, TagListas, TagLinks, TagsImg, TagsSemanticas, TagsVideo, TabelasEstaticas, TabelasEstaticas2, FormularioEstatico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aula_06052026');
}
