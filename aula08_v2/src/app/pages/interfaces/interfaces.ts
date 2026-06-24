import { Component } from '@angular/core';
import { IUser } from '../../shared/i-user';

type iuserlocal = {id:number, nome:string, email?: string};

@Component({
  selector: 'app-interfaces',
  imports: [],
  templateUrl: './interfaces.html',
  styleUrl: './interfaces.css',
})
export class Interfaces {

  user: IUser = {id: 1, nome: "Leo", email: "teste@gmail.com"};
  xitex: IUser = {id: 1, nome: "xitex", email: "xitex@gmail.com"};
  
  user2:iuserlocal = {id: 1, nome: "Leo", email: "teste@gmail.com"};


  constructor() {

    console.log("A minha interface: ", this.xitex);
    console.log("A minha interface local: ", this.user2);
  }
}
