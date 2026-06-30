import { Component } from '@angular/core';
import { saudacoes } from './Tipo de functions/fnc_declaracao_comum';
import { saudacoes_expressao } from './Tipo de functions/fnc_expressao';
import { somar, somarcomblocoeretorno } from './Tipo de functions/fnc_arrow';
import { processar } from './Tipo de functions/fnc_callback';

@Component({
  selector: 'app-fuctions',
  imports: [],
  templateUrl: './fuctions.html',
  styleUrl: './fuctions.css',
})
export class Fuctions {

  //Sobre o THIS
  localsomar = () => {
    return 10 + 99;
  }
  constructor () {
    const localMessage = saudacoes("Leo");
    console.log("Invocar funções de declaração comum:na linha 14"+ localMessage);
    console.log("Invocar funções de declaração comum:na linha 15"+ saudacoes_expressao());
    console.log("Invocoar função arrow sem bloco :" + somar(20,6))
    const somablocoretorno = somarcomblocoeretorno(2,1);
    console.log(somablocoretorno);
    console.log("Invocação do callback" , processar(5, () => 20));
    console.log("Sobre o THIS", this.localsomar());
  }

}
