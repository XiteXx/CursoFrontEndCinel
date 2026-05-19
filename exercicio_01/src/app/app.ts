import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagHeader } from "./tag-header/tag-header";
import { TagFooter } from "./tag-footer/tag-footer";
import { TagCompilacaoImgVideoSemanticas } from "./tag-compilacao-img-video-semanticas/tag-compilacao-img-video-semanticas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagHeader, TagFooter, TagCompilacaoImgVideoSemanticas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicio_01');
}
