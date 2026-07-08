import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IUser } from '../../shared/i-user';
import { Observable } from 'rxjs';
import { FakeBack } from '../../service/fake-back';

type LocalError = {errorAsync: boolean, errorNome: string};

@Component({
  selector: 'app-async-tables',
  imports: [CommonModule],
  templateUrl: './async-tables.html',
  styleUrl: './async-tables.css',
})
export class AsyncTables {

  //User Promiese / then & catch
  localUserPromise:IUser[] = [];

  //user com async await localuserasyncpromise
  localUserAsyncPromise: IUser[] = [];

  //User com observable
  localUserObservable$: IUser[] = [];

  //Criação das variaveis de erro
  errorPromise: LocalError = {errorAsync:false, errorNome:""};
  errorAsyncAwaitPromise: LocalError = {errorAsync:false, errorNome:""};
  errorObservable: LocalError = {errorAsync:false, errorNome:""}

  //DI Dependent Injection

  // constructor(protected fakeBack: FakeBack){
  //   this.localUserObservable$ = fakeBack.getUtilizadoresObservable();

  //   //Chamar o metodo de promise
  //   this.loadPromise();

  //   this.loadAsyncAwait();
  // }

  constructor(protected fakeBack: FakeBack) {}

  loadPromise = () => {
    this.fakeBack.getUsersPromise().then((res: IUser[]) => {
      console.log("Result: ",res);
      return this.localUserPromise = res;
    }).catch((q) => {
      console.error("Erro",q)
      this.errorPromise = {errorAsync: true, errorNome:"Erro no loadPromise:  "+ q};
      this.localUserAsyncPromise = [];
    });
  }

  loadAsyncAwait() {
    this.fakeBack.getUsersAsync().then((res: IUser[]) => {
    this.localUserAsyncPromise = res;

    }).catch(error => {
      console.error("Erro asyncawait", console.error);
      this.localUserAsyncPromise = [];
      this.errorAsyncAwaitPromise = {errorAsync: true, errorNome: "Erro no load async await promise:  " + error};


    });
  }

  loadObservable() {
  // this.localUserObservable$ = this.fakeBack.getUtilizadoresObservable();
  }




}
