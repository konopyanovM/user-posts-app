import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getErrorMessage } from '../../core/helpers';
import { AuthService } from './auth.service';
import { PopupService } from '../../core/services/popup.service';
import { ApiResponse, HttpStatus } from '../../core/types';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  // Injections
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _popupService = inject(PopupService);

  // Public
  public passwordVisible: boolean = false;

  // Private
  private _formGroup = this._formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  // Accessors
  get formGroup(): FormGroup {
    return this._formGroup;
  }

  // Public methods

  public onSubmit(): void {
    if (this.formGroup.valid) {
      const data = this.formGroup.value;

      const res: ApiResponse = this._authService.login(data);

      if (res.statusCode === HttpStatus.OK) this._popupService.success(res.message);
      else this._popupService.error(res.message);
    }
  }

  protected readonly getErrorMessage = getErrorMessage;
}
