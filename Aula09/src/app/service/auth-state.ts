import { EnvironmentInjector, inject, Service } from '@angular/core';
import { FirebaseService } from './firebase';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'firebase/auth';

@Service()
export class AuthStateService {

    private auth = inject(FirebaseService).auth;
    private environmentInjector = inject(EnvironmentInjector);
    private routes = inject(Router);
//Isto é um observable do tipo Hot
    private user$ = new BehaviorSubject <User | null>(null);



}
