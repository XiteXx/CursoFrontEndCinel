import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrutura-de-controles',
  imports: [],
  templateUrl: './estrutura-de-controles.html',
  styleUrl: './estrutura-de-controles.css',
})
export class EstruturaDeControles implements OnInit {

  idade: number = 18;
  cor: string = "red";

  constructor() {
    this.idade = + 10;
    console.log("variavel idade:  ?", this.idade);
  }

  ngOnInit(): void {
    this.exemploifelse
  }

  exemploifelse = () => {
    if (this.idade <= 18) {
      return console.log("Idade é inferior a 18 - ", this.idade);
    }
    console.log("Idade é superior a 18 - ", this.idade);

    if (this.idade >= 18) {
      console.log("Idade é superior a 18!");
    } else {
      console.log("Idade é inferior a 18! -", this.idade);
    }
  };

  exemploswitchcase () {
    switch (this.cor) {
      case "azul":
        console.log("A cor encontrada foi a azul!.");
      break;

      case "rosa":
        console.log("A cor encontrada foi a rosa!.");
      break;

      case "amarelo":
        console.log("A cor encontrada foi a amarelo!.");
      break;

      case "vermelho":
        console.log("A cor encontrada foi a vermelho!.");
      break;

      default:
      console.log("A Cor não encontrada.");
      break;

    }

  }
}///Fim da classe



