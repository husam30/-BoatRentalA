import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RowingBoatData } from '../shared/model/rowingBoat.model';

export class EditFormRowing extends FormGroup {
  constructor() {
    super({
      BoatNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      numberOfSeats: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      id: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  /** Gets the model of this form */
  public getModel(): RowingBoatData {
    return {
      bootNumber: this.controls.BoatNumber.value,
      numberOfSeats: this.controls.numberOfSeats.value,
      id: this.controls.id.value,
      price: 0,
      boatStatus: 'Avalible'
    };
  }
}
