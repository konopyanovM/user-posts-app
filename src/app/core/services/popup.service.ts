import { inject, Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  // Injections
  private _toastrService = inject(ToastrService);
  //
  
  private _options: Partial<IndividualConfig> = {
    toastClass: 'popup',
  };

  public success(message: string): void {
    this._toastrService.success(message, 'Success', this._options);
  }

  public error(message: string): void {
    this._toastrService.error(message, 'Error', this._options);
  }
}
