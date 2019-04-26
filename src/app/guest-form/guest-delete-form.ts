import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestData } from '../shared/model/guest.model';

export class DeleteFormGuest extends FormGroup {
  constructor() {
    super({
      guestid: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): GuestData {
    return {
      id: this.controls.guestid.value,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    };
  }
}
