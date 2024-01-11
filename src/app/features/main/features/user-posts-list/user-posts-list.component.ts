import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../types';
import { User } from '../../../../core/types';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-posts-list',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './user-posts-list.component.html',
  styleUrl: './user-posts-list.component.scss',
})
export class UserPostsListComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  private _userService = inject(UserService);
  private _postsService = inject(PostsService);

  private _userId: number | null = null;

  public userPosts$: Observable<Post[]> | null = null;
  public user$: Observable<User> | null = null;

  ngOnInit() {
    this._userId = this._activatedRoute.snapshot.params['id'];
    
    if (this._userId) {
      this.user$ = this._userService.getUser(this._userId);
      this.userPosts$ = this._postsService.getUserPosts(this._userId);
    }
  }
}
