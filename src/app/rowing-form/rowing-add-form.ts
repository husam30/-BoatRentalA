import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RowingBoatData } from '../shared/model/rowingBoat.model';

export class AddFormRowing extends FormGroup {
  constructor() {
    super({
      bootNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      numberOfSeats: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): RowingBoatData {
    return {
      bootNumber: this.controls.bootNumber.value,
      numberOfSeats: this.controls.numberOfSeats.value,
      id: 0,
      price: 0,
      boatStatus: 'Avalible'
    };
  }
}
