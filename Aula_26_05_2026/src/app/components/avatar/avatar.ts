import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  localnome: string = 'Leonardo';
  localimg!: string;
  //nome2:string = '1';
  //nome3 = true;

  logout() {
    /* throw new Error('Method not implemented.'); */
    console.log('You have logged out sucessfuly.');
  }
  teste() {
    /* throw new Error('Method not implemented.'); */
    console.log('Pre-Logout');
  }
}
