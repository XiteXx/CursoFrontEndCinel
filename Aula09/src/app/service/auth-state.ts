import { EnvironmentInjector, inject, runInInjectionContext, Service } from '@angular/core';
import { FirebaseService } from './firebase';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, from, Observable, take, tap, throwError } from 'rxjs';
import { AuthError, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User, UserCredential } from 'firebase/auth';

@Service()
export class AuthStateService {

    private auth = inject(FirebaseService).auth;
    private environmentInjector = inject(EnvironmentInjector);
    private routes = inject(Router);
//Isto é um observable do tipo Hot
    private user$ = new BehaviorSubject <User | null>(null);

    initAuthListener():void {
        runInInjectionContext(this.environmentInjector, () => {
            onAuthStateChanged(this.auth, (user: User | null) => {
                this.user$.next(user);
            });
        });
    }

    getUser() : Observable<User | null> {
        return this.user$.asObservable();
    }

    isAuthenticated = (): boolean => {
        return this.user$.value !== null;
    }
 
    loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return from(signInWithPopup(this.auth, provider)).pipe(
            take(1),
            tap((user: UserCredential) => {
            console.log("Result no server.ts:  ",user);
            this.routes.navigate(["/about"]);
        }), catchError((e: AuthError) => {
            return throwError(() => new Error(e.message || 'Erro desconhecido'));
        })
    );
    }


}
