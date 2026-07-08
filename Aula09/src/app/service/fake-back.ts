import { Service } from '@angular/core';
import { IUser } from '../shared/i-user';
import { DataDummy } from './dummy/sand-box';
import { catchError, delay, from, Observable, throwError } from 'rxjs';

@Service()
export class FakeBack {
    private localUser: IUser[] = DataDummy;

    //1º É a promise - Método padrão
    // =====================================================
    // Este método retorna uma Promise
    // Ideal para ensinar .then() e .catch()
    
    getUsersPromise(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
        //Simular HTTP ou requisição de uma API usemos o settimer
        setTimeout(() => {
        const sucesso = Math.random() > 0.5;
        if(sucesso) {
            //Se fosse uma API retornava os nossos dados
            resolve(this.localUser)
        } else {
            reject("Erro HTTP 500")
        }
        }, 3000);
        });

    }


  // =====================================================
  // MÉTODO 2 - ASYNC / AWAIT
  // =====================================================
  // Este método também retorna Promise
  // Mas utiliza async/await
  // =====================================================


  async getUsersAsync(): Promise<IUser[]> {

    try {
        const data = await this.getUsersPromise();
        return data;
    } catch (error) {
        console.log("Erro", error) //1º Metodo de erro
        throw error; //2º Metodo de erro
    }

  }

  //=====================================================
  // MÉTODO 3 - OBSERVABLE
  // =====================================================
  // Observable é muito utilizado no Angular
  // HttpClient retorna Observable
  // as vezes temos que converter uma Promise para trabalhar com Observable
  // =====================================================

  getUtilizadoresObservable():Observable<IUser[]> {

    //SIMULA SUCESSO OU ERRO
    const sucesso = Math.random() > 1;
    if (!sucesso) {
        return throwError(() => new Error("Erro 404"));
    }

    // Operador FROM() transforma uma promise em observable
    // OF() este operador transforma list, array ou objeto em observable
    const localPromise:Promise<IUser[]> = this.getUsersPromise();
    return from(localPromise).pipe(
        delay(2000), 
        catchError((wx) => {
            console.log("Erro no observable", wx);
            throw wx;
        })
    );}

}
