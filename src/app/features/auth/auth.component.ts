import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getErrorMessage } from '../../core/helpers';
import { AuthService } from './auth.service';

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

  public onSubmit() {
    if (this.formGroup.valid) {
      const data = this.formGroup.value;

      this._authService.login(data);
    }
  }

  protected readonly getErrorMessage = getErrorMessage;
}
