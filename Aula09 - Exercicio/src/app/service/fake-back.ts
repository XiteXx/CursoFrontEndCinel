import { Service } from '@angular/core';
import { IUser } from '../shared/i-user';
import { DataDummy } from './dummy/sand-box';
import { catchError, delay, from, Observable, throwError } from 'rxjs';

@Service()
export class FakeBack {
    private localUser: IUser[] = DataDummy;

    
getUsersPromise(): Promise<IUser[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.localUser);
    }, 1000);
  });
}


  async getUsersAsync(): Promise<IUser[]> {

    try {
        const data = await this.getUsersPromise();
        return data;
    } catch (error) {
        console.log("Erro", error) //1º Metodo de erro
        throw error; //2º Metodo de erro
    }

  }



getUtilizadoresObservable(): Observable<IUser[]> {

  const localPromise = this.getUsersPromise();

  return from(localPromise).pipe(
    delay(2000)
  );

}
}
