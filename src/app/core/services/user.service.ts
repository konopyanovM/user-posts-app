import { Injectable } from '@angular/core';
import { USERS } from '../../../assets/mock/users';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private USER = 'user';

  constructor() {
  }

  public getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.USER) || '');
  }

  public findUser(username: string): false | User {
    const user = USERS.find(user => user.username === username);

    if (user) return user;
    return false;
  }
}
