import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor() { }

  signIn(){
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve();
      }, 1000);
    });
  }

  signOut(){
    this.isAuth = false;
  }
}
