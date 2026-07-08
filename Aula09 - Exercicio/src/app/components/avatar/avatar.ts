import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  localNome: string = 'Leo';
  localImage!:string;


  logout() {
    // throw new Error('Method not implemented.');
    console.log('deslogou');
  }
}
