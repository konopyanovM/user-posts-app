import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Post } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // Injections
  private _http = inject(HttpClient);

  public getUserPosts(id: number): Observable<Post[]> {
    return this._http.get<Post[]>(environment.api + `/user/${id}/posts`);
  }
}
