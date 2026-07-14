import { Service } from '@angular/core';
import { Auth, getAuth } from 'firebase/auth';
import { app } from '../app.config';

@Service()
export class FirebaseService {
    auth: Auth;

    constructor() {
        this.auth = getAuth(app);
    }
}
