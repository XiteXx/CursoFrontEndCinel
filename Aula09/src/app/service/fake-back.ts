import { Service } from '@angular/core';
import { IUser } from '../shared/i-user';
import { DataDummy } from './dummy/sand-box';

@Service()
export class FakeBack {
    localUser: IUser[] = DataDummy;

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

}
