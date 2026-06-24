import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css',
})
export class Typescript implements OnInit{

  //Quando temos mais de um tipo, temos que o CASTING
  numerodacasa: number | string | undefined | null;
  numerodaloja: string;

  constructor() {
    this.numerodacasa = 1;
    this.numerodaloja = "10";
  }

  ngOnInit(): void {
    //Recebe somente 1 tipo de dado e precisa fazer o cast
    const localNumber: number = this.numerodacasa as number;
    const localNumber2: number = <number>this.numerodacasa;
    this.numerodacasa = this.numerodaloja;

    console.log("Teste:" + localNumber, localNumber2);
  }

  omeunumerodecasa(): number {
    const localName = "XiteX";
    console.log("Nosso numero: ", this.omeunumerodecasa, this.numerodaloja);

    console.log("A minha string" + localName);

    return this.numerodacasa as number;
  }

  omeunick(): string {
    const localName = "XiteX";
    console.log("Nosso numero: ", this.omeunumerodecasa, this.numerodaloja);

    console .log("A minha string" + localName);

    return "XiteX";
  }
}
