/*

Este servicio lo utilizaremos para unificar todos los aspectos 
realacionados con la auntentificacin, utilizando la API de Firebase.

*/

import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$ = authState(this.afAuth);

  constructor(
    private afAuth: Auth
  ) { }
  // A continuación se crean los metodos para el regristro, inicio de sesión y cierre de sesión
  async register(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this.afAuth, email, password);
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    return signOut(this.afAuth);
  }
}