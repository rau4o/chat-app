import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, of, switchMap} from 'rxjs';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "@angular/fire/auth";
import {SigninCredentials, SignupCredentials} from "./auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState = new BehaviorSubject<Object | null>(null);

  readonly isLoggedIn$ = authState(this.auth);

  constructor(private auth: Auth) { }

  signIn({email, password}: SigninCredentials) {
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  signUp({email, password, displayName}: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
      .pipe(
        switchMap(({user}) => updateProfile(user, {displayName}))
      )
  }

  signOut() {
   return from(this.auth.signOut());
  }
}
