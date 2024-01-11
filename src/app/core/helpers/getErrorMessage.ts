import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from './getValidatorErrorMessage';

export const getErrorMessage = (formControl: AbstractControl | null): string => {
  if (formControl === null) return '';
  if (!formControl.pristine && formControl.touched)
    return getValidatorErrorMessage(formControl.errors);
  else return '';
};
