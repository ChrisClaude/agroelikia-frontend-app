import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword]'
})
export class ConfirmPasswordDirective {

  constructor() { }

}

/** A hero's name can't match the hero's alter ego */
export const confirmPasswordIdentical: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? null : { confirmPassword: true };
};
