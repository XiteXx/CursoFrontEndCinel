import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IUser } from '../../shared/i-user';
import { catchError, Observable, of, switchMap, take } from 'rxjs';
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
  // localUserObservable$: Observable<IUser[]>;
  localUserSubscription: IUser[] = [];

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
  //Info sobre RxJS
  //Operador take(x), faz com que após x subscrições o canal de dados é fechado
  this.fakeBack.getUtilizadoresObservable().pipe(take(1), switchMap((res: IUser[]) => {
    console.log("Resultado de carregar observable:  ", res);
    return this.localUserSubscription = res;
  }), 
  
  catchError((error) => {
    console.error("Erro load observabhle", error);
    this.errorObservable = {errorAsync: true, errorNome: "Erro no obsercvable:  " + error};
    return of([]);

  })
  ).subscribe();
  }

  loadObservableComSubscribeObjeto() {
  //Info sobre RxJS
  //Operador take(x), faz com que após x subscrições o canal de dados é fechado
  this.fakeBack.getUtilizadoresObservable().pipe(take(1), switchMap((res: IUser[]) => {
    console.log("Resultado de loadObservableComSubscribeObjeto:  ", res);
    return res;
  }), 
  
  ).subscribe({
    next: (res) => {console.log("Nossos Dados:  " + res)},
    error: (e) => console.log("Erro de loadObservableComSubscribeObjeto:  " + e),
    complete: () => console.log("O Noso complete, terminou o observable"),
  });
  }




}
