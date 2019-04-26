import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GuestData } from '../shared/model/guest.model';

export class EditFormGuest extends FormGroup {
  constructor() {
    super({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      id: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  /** Gets the model of this form */
  public getModel(): GuestData {
    return {
      id: this.controls.id.value,
      firstName: this.controls.firstName.value,
      lastName: this.controls.lastName.value,
      phoneNumber: this.controls.phoneNumber.value,
      email: this.controls.email.value
    };
  }
}
