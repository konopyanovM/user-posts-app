import { inject, Injectable } from '@angular/core';
import { LoginCredentials } from './types';
import { UserService } from '../../core/services/user.service';
import { ApiResponse, HttpStatus, User } from '../../core/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Injections
  private _userService = inject(UserService);
  //
  public isAuthorized: boolean = false;

  private USER = 'user';

  public login(data: LoginCredentials): ApiResponse {
    const user = this._userService.findUser(data.username);

    if (user) {
      //   Check for password match
      if (user.password === data.password) {
        this._loginHandler(user);
        // Authorized successfully
        return {
          statusCode: HttpStatus.OK,
          message: 'Authorized successfully',
        };
      }
      // Passwords mismatch
      return {
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Passwords doesn\'t match',
      };
    }
    // User not found
    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: 'User not found',
    };
  }

  /**
   * Save user in localstorage
   * @private
   */
  private _loginHandler(user: User) {
    localStorage.setItem(this.USER, JSON.stringify(user));
  }
}
