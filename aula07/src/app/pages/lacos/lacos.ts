import { Component } from '@angular/core';

@Component({
  selector: 'app-lacos',
  imports: [],
  templateUrl: './lacos.html',
  styleUrl: './lacos.css',
})
export class Lacos {
  Cores: string[] = ["azul", "vermelho", "laranja", "preto"];

  constructor (){
    this.Cores[0];
    this.Cores[1];
    this.Cores[2];
    this.Cores[3];
    this.exemplofortradicional();

    this.exemploforof();

    this.exemploforeach();
  }
  exemplofortradicional () {
    for (let x = 0; x < Array.length; x++) {
        const element = this.Cores[x];
        console.log("O array:  ", element, "Nivel do array : " + x);
      }

  };

  exemploforof () {
    for (const data of this.Cores) {
      console.log("O nosso array for of: ", data, );
    }
  }

  exemploforeach = () => {
    //this.Cores.forEach(element => console.log("O nosso array for of: ", element, ));
    this.Cores.forEach(element => {
      console.log("O nosso array for each: ", element, );
    });
  }
}
