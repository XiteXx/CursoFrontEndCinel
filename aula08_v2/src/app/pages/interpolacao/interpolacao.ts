import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  imports: [],
  templateUrl: './interpolacao.html',
  styleUrl: './interpolacao.css',
})
export class Interpolacao {

  nome: string = "XiteX";
  idade: number = 5;

  constructor() {
    const mensagem = "Olá, o meu nome é $(this.nome) e tenho $(this.idade) anos";
    const mensageminterpolacao = "Olá o meu nome é + this.nome e tenho this.idade anos";

    console.log("Minha Interpolação:" , mensagem);
  }
}
