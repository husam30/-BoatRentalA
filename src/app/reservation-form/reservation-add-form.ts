import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationData } from '../shared/model/reservation.model';

export class AddReservation extends FormGroup {
  constructor() {
    super({
      numberOfPerson: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      startDate: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      endDate: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      guest: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      boats: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): ReservationData {
    return {
      id: 0,
      numberOfPerson: this.controls.numberOfPerson.value,
      startDate: this.controls.startDate.value,
      endDate: this.controls.endDate.value,
      guest: this.controls.guest.value,
      boats: this.controls.boats.value,
      tripStatus: 'isgoing'
    };
  }
}
