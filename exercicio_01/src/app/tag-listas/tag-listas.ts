import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {

  StringUnica: string = 'Teste de string única';

  Alunos: string[] = ['Leonardo', 'Xavier', 'Sara', 'António', 'Alonso',"1", this.StringUnica];

}
