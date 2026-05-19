import { Component } from '@angular/core';
import { TagsImg } from "../tags-img/tags-img";
import { TagsSemanticas } from "../tags-semanticas/tags-semanticas";
import { TagsVideo } from "../tags-video/tags-video";

@Component({
  selector: 'app-tag-compilacao-img-video-semanticas',
  imports: [TagsImg, TagsSemanticas, TagsVideo],
  templateUrl: './tag-compilacao-img-video-semanticas.html',
  styleUrl: './tag-compilacao-img-video-semanticas.css',
})
export class TagCompilacaoImgVideoSemanticas {}
