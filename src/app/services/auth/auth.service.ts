import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  userIdAuth: number;

  constructor(private userService: UserService) { }

  signIn(email: string, password: string){
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const user = this.userService.getUserBy('email', email);
        if (user) {
          if (user.password === password) {
            this.isAuth = true;
            this.userIdAuth = user.id;
            resolve();
          }
          reject("Le mot de passe ne correspond pas.");
        }
        reject("L'adresse e-mail n'existe pas.");
      }, 1000);
    });
  }

  signOut(){
    this.isAuth = false;
    this.userIdAuth = null;
  }
}
