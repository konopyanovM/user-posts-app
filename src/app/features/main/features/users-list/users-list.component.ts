import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../../../core/types';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  private _userService = inject(UserService);

  public users$: Observable<User[]> = this._userService.getUsers();

  ngOnInit() {
    this.users$ = this._userService.getUsers();
  }
}
