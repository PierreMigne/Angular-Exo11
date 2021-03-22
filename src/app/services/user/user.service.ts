import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {
    this.users = [];
    this.users.push(new User('Pierre', 'Migne', 'pierre.migne@hotmail.fr', '1234'));
    this.users.push(new User('admin', 'admin', 'admin@admin.fr', '1234'));
  }

  getUserBy(userAttr, userValue): User | null {
    for (const user of this.users) {
      if (user[userAttr] === userValue) {
        return user;
      }
    }
    return null;
  }

  editUser(editedUser: User) {
    for (let i = 0; i < this.users.length - 1; i++) {
      if (this.users[i].id === editedUser.id) {
        this.users[i] = editedUser;
        break;
      }
    }
  }
}
