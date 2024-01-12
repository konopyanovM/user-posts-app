import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/types';
import { AuthService } from '../auth/auth.service';
import { fadeInDown } from '../../core/animations';
import { getRouteAnimationData } from '../../core/helpers/getRouteAnimationData';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [fadeInDown],
})
export class MainComponent {
  private _userService = inject(UserService);
  private _authService = inject(AuthService);
  public childrenOutletContext = inject(ChildrenOutletContexts);

  public user: User = this._userService.getCurrentUser();

  public logout() {
    this._authService.logout();
  }

  protected readonly getRouteAnimationData = getRouteAnimationData;
}
