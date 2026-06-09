import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-data-types',
  imports: [CommonModule],
  templateUrl: './data-types.html',
  styleUrl: './data-types.css',
})
export class DataTypes implements OnInit {

  localString: string = "O meu texto";
  localNumber: number = 100;
  localBoolean: boolean = false;
  localArray: string [] = [];
  localNull: null = null;
  localNull2!: null;
  localUndefined: undefined = undefined;
  localUndefined2!: undefined;

  /**Tipos de dados assincronos */
  localPromise: Promise<string> =  new Promise<string>(e => {return "Aula de assincronos"});
  localObservable$ = new Observable<string>(a => a.next("Aula de assincronos"));
  localObservable2$:Observable<string> = of("Aula de Assincronos");

  constructor () {
    this.localObservable$.subscribe(data => console.log("A minha variavel de observable com subscribe" , data));
    this.localPromise.then(result => console.log("A minha variavel de promise com then", result));


    console.log("minha variavel de string:  " + this.localString);
    console.log("minha variavel de number:  " + this.localNumber);
    console.log("minha variavel de boolean:  " + this.localBoolean);
    console.log("minha variavel de array:  "  + this.localArray);
    console.log("minha variavel de null:  " + this.localNull);
    console.log("minha variavel de undefined:  " + this.localUndefined);
    console.log("minha variavel de Promise sem subscrição:  " + this.localPromise);
    console.log("minha variavel de Observable sem subscrição:  " + this.localObservable$);
  }

  ngOnInit(): void {

    this.localObservable$.subscribe((data) =>
      console.log('A minha variavel de e obbservable com subscribe', data as string),);

    // this.localPromise.then((result))
    
  }
}
