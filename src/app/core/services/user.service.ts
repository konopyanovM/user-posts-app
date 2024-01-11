import { inject, Injectable } from '@angular/core';
import { USERS } from '../../../assets/mock/users';
import { User } from '../types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Injections
  private _http = inject(HttpClient);

  private USER = 'user';

  public getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.USER) || '');
  }

  public findUser(username: string): false | Partial<User> {
    const user = USERS.find(user => user.username === username);

    if (user) return user;
    return false;
  }

  public getUsers(): Observable<User[]> {
    return this._http.get<User[]>(environment.api + '/users');
  }

  public getUser(id: number): Observable<User> {
    return this._http.get<User>(environment.api + '/users/' + id);
  }
}
